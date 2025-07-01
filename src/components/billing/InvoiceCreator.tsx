import React, { useState } from 'react'
import { Plus, Trash2, DollarSign, Calendar, User, Mail } from 'lucide-react'

interface LineItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

interface InvoiceFormData {
  customer_name: string
  customer_email: string
  due_date: string
  line_items: LineItem[]
  notes?: string
}

interface InvoiceCreatorProps {
  organizationId: string
  onInvoiceCreated?: (invoice: any) => void
  onCancel?: () => void
}

export const InvoiceCreator: React.FC<InvoiceCreatorProps> = ({
  organizationId,
  onInvoiceCreated,
  onCancel
}) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<InvoiceFormData>({
    customer_name: '',
    customer_email: '',
    due_date: '',
    line_items: [{
      id: '1',
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    }],
    notes: ''
  })

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    }
    setFormData({
      ...formData,
      line_items: [...formData.line_items, newItem]
    })
  }

  const removeLineItem = (id: string) => {
    if (formData.line_items.length > 1) {
      setFormData({
        ...formData,
        line_items: formData.line_items.filter(item => item.id !== id)
      })
    }
  }

  const updateLineItem = (id: string, field: keyof LineItem, value: any) => {
    const updatedItems = formData.line_items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value }
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate
        }
        return updatedItem
      }
      return item
    })
    
    setFormData({
      ...formData,
      line_items: updatedItems
    })
  }

  const calculateTotal = () => {
    return formData.line_items.reduce((total, item) => total + item.amount, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Create invoice in database
      const response = await fetch('/api/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organization_id: organizationId,
          ...formData,
          total_amount: calculateTotal(),
          status: 'draft'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create invoice')
      }

      const invoice = await response.json()

      // Create Stripe payment link
      const paymentResponse = await fetch('/api/create-payment-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoice_id: invoice.id,
          amount: calculateTotal() * 100, // Convert to cents
          customer_email: formData.customer_email,
          customer_name: formData.customer_name,
          description: `Invoice ${invoice.invoice_number}`,
          metadata: {
            invoice_id: invoice.id,
            organization_id: organizationId
          }
        }),
      })

      if (!paymentResponse.ok) {
        throw new Error('Failed to create payment link')
      }

      const paymentData = await paymentResponse.json()

      // Update invoice with payment link
      await fetch(`/api/invoices/${invoice.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_link_url: paymentData.url,
          stripe_session_id: paymentData.id,
          status: 'sent'
        }),
      })

      onInvoiceCreated?.({
        ...invoice,
        payment_link_url: paymentData.url
      })

      // Reset form
      setFormData({
        customer_name: '',
        customer_email: '',
        due_date: '',
        line_items: [{
          id: '1',
          description: '',
          quantity: 1,
          rate: 0,
          amount: 0
        }],
        notes: ''
      })

    } catch (error) {
      console.error('Error creating invoice:', error)
      alert('Failed to create invoice. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <DollarSign className="h-6 w-6 mr-2" />
          Create Invoice
        </h2>
        <p className="text-gray-600 mt-1">Generate a professional invoice for your services</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <User className="h-4 w-4 mr-1" />
              Customer Name
            </label>
            <input
              type="text"
              required
              value={formData.customer_name}
              onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter customer name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              Customer Email
            </label>
            <input
              type="email"
              required
              value={formData.customer_email}
              onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="customer@email.com"
            />
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Due Date
          </label>
          <input
            type="date"
            required
            value={formData.due_date}
            onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Line Items */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Line Items</h3>
            <button
              type="button"
              onClick={addLineItem}
              className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Item
            </button>
          </div>

          <div className="space-y-4">
            {formData.line_items.map((item, index) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 items-end p-4 bg-gray-50 rounded-lg">
                <div className="col-span-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    required
                    value={item.description}
                    onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Service description"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    required
                    value={item.quantity}
                    onChange={(e) => updateLineItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rate ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    value={item.rate}
                    onChange={(e) => updateLineItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <div className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700">
                    ${item.amount.toFixed(2)}
                  </div>
                </div>

                <div className="col-span-1">
                  {formData.line_items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLineItem(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes (Optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Additional notes or terms..."
          />
        </div>

        {/* Total */}
        <div className="flex justify-end">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-xl font-bold text-gray-900">
              Total: ${calculateTotal().toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">
              Payment processing fees will be added by Stripe
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-4 pt-6 border-t border-gray-200">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={loading || calculateTotal() === 0}
            className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Invoice...' : 'Create Invoice & Payment Link'}
          </button>
        </div>
      </form>
    </div>
  )
} 
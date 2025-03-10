class Inquiry < ApplicationRecord
  validates :name, :message, :website, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
  validates :phone_number, presence: true, format: { 
    with: /\A\d{10}\z/, 
    message: "must be exactly 10 digits and contain only numbers"
  }
end

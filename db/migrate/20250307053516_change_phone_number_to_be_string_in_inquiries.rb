class ChangePhoneNumberToBeStringInInquiries < ActiveRecord::Migration[7.1]
  def change
    change_column :inquiries, :phone_number, :string
  end
end

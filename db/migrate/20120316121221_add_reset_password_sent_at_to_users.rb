class AddResetPasswordSentAtToUsers < ActiveRecord::Migration
  def change
    add_column :users, :reset_password_sent_at, :datetime unless column_exists?(:users, :reset_password_sent_at)
  end
end
# Be sure to restart your server when you modify this file.

GkoManoirLurinCom::Application.config.session_store :cookie_store, :key => "#{APP_CONFIG["session_store_key"]}"

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
# GkoManoirLurinCom::Application.config.session_store :active_record_store

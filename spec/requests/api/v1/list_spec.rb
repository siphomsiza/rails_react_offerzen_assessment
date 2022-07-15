require 'rails_helper'

RSpec.describe "Api::V1::Lists", type: :request do
  describe "GET /index" do
    before do
      get '/api/v1/list'
    end

    it 'returns status code 200' do
       expect(response).to have_http_status(:success)
     end
  end
end

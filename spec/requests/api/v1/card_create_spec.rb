require 'rails_helper'

RSpec.describe "Api::V1::CardCreates", type: :request do
  describe "Post /create" do
    before do
      @bob = Trello::Member.find("siphomsiza")
      @list = @bob.boards.first.lists
      @cards_size_before = Trello::List.find(@list.first.id).cards

      post '/api/v1/list/create', params:
                  { list: {
                    name: Faker::Name.name,
                    list_id: @list.first.id,
                    board_id: @list.first.board_id
                  } }
    end
    it 'returns a created status' do
      expect(response).to have_http_status(201)
    end

    it 'returns all first list cards size' do
      @cards_size_after = Trello::List.find(@list.first.id).cards
      expect(@cards_size_before.size + 1).to eq(@cards_size_after.size)
    end
  end
end

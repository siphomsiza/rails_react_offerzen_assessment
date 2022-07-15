class Api::V1::ListController < ApplicationController
  def index
    @member = Trello::Member.find("siphomsiza")
    render json: boards_lists_cards(@member.boards)
  end

  def create
    card = Trello::Card.new(card_params)
    if card.save
      render json: card, status: :created
    else
      render json: card.errors, status: 400
    end
  end

  def boards_lists_cards(boards)
    boards.map{|board| board.attributes.merge!({lists: board.lists.map{|list| list.attributes.merge!({cards: list.cards.map{|card| card.attributes} }) }})}
  end

  private

  def card_params
    params.require(:list).permit(:name, :list_id,:board_id).to_hash
  end

end

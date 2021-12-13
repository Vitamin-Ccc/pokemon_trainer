class Api::PokemonsController < ApplicationController
  before_action :set_trainer
  before_action :set_pokemon, only: [:show, :update, :destroy]

  def index
    render json: @trainer.pokemons
  end

  def show
    render json: @pokemon
  end

  def create
    @pokemon = @trainer.pokemons.new(pokemon_params)
    if(@pokemon.save)
      render json: @pokemon
    else
      render json: {errors: @pokemon.errors}, status: 422
    end
  end

  def update
    if(@pokemon.update(pokemon_params))
      render json: @pokemon
    else
      render json: {errors: @pokemon.errors}, status: 422
    end
  end

  def destroy
    render json: @pokemon.destroy
  end

  private

  # sanitizer
  def pokemon_params
    params.require(:pokemon).permit(:name, :gender, :fruit)
  end

  def set_trainer
    @trainer = Trainer.find(params[:trainer_id])
  end

  def set_pokemon
    @pokemon = @trainer.pokemons.find(params[:id])
  end
end

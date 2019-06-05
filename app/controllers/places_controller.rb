class PlacesController < ApplicationController
    def index
        @places = Place.all
        render json: @places, status: :ok
    end

    def show
        @place = Place.find(params[:id])
        render json: @place, status: :ok
    end 
end

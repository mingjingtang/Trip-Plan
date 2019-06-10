class AllplacesController < ApplicationController
    def index
        @allPlaces = Allplace.all
        render json: @allPlaces, status: :ok    
    end
end
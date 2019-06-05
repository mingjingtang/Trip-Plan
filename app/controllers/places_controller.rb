class PlacesController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @trips = @user.trips
        @trip = @trips.find(params[:trip_id])
        @places = @trip.places
        render json: @places, status: :ok
    end

    def show
        @place = Place.find(params[:id])
        render json: @place, status: :ok
    end 
end

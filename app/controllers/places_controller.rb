class PlacesController < ApplicationController
    def index
        if params[:user_id].present?
            @user = User.find(params[:user_id])
            puts @user
            @trips = @user.trips
            @trip = Trip.find(params[:trip_id])
            @places = @trip.places
            render json: @places, status: :ok
        else
            @places = Place.all
            render json: @places, status: :ok
        end    
    end
    
    def show
        @place = Place.find(params[:id])
        render json: @place, status: :ok
    end 
end

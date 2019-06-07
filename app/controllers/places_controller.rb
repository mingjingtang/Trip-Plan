class PlacesController < ApplicationController
    def index
        if params[:user_id].present?
            @user = User.find(params[:user_id])
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

    def update
        
        @place = Place.find(params[:id])
        @trip = Trip.find(params[:trip_id])
        @trip.places.push(@place)

        render json: @trip, status: :ok
    end

    private
      def place_params
        params.permit(:name, :region, :image)
      end
end

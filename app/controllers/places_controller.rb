class PlacesController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @trips = @user.trips
        @trip = Trip.find(params[:trip_id])
        @places = @trip.places
        render json: @places, status: :ok
    end
    
    def show
        @place = Place.find(params[:id])
        render json: @place, status: :ok
    end 

    # def update
    #     @place = Place.find(params[:id])
    #     @trip = Trip.find(params[:trip_id])
    #     @trip.places.push(@place)
    #     render json: @trip, status: :ok
    # end

    def create
        @trip = Trip.find(params[:trip_id])
        @place = Place.new(place_params)
        
        if @place.save
          @trip.places.push(@place)
          render json: @place, status: :created
        else
          render json: { errors: @place.errors }, status: :unprocessable_entity
        end
    end


    def destroy
        @Trip = Trip.find(params[:trip_id])
        @place = Place.find(params[:id])
        @place.destroy
        head :no_content
    end


    private
      def place_params
        params.permit(:name, :region, :image)
      end
end

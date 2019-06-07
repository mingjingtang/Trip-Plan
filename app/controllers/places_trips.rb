class PlacestripsController < ApplicationController
#     def index
        
#     end
    

#     def create
#         @places_trip = PlacesTrip.new(placestrip_params)
#         if @places_trip.save
#               render json: @places_trip, status: :created
#         else
#               render json: { errors: @places_trip.errors }, status: :unprocessable_entity
#         end

#     def update 
#     end

#     def destroy 
#     end

#     private
#       def placestrip_params
#         params.require(:placestrip).permit(:trip_id, :place_id)
#       end
end
package com.example.parking.resources;

import com.example.parking.api.ParkingSlot;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/parking-slots")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ParkingSlotResource {

    @GET
    public List<ParkingSlot> getAllSlots() {
        return ParkingSlot.listAll();
    }

    @POST
    @Transactional
    public Response createSlot(ParkingSlot slot) {
        slot.persist();
        return Response.status(Response.Status.CREATED).entity(slot).build();
    }

    @PUT
    @Path("/{id}/toggle")
    @Transactional
    public Response toggleSlot(@PathParam("id") Long id) {
        ParkingSlot slot = ParkingSlot.findById(id);
        if (slot == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        slot.isOccupied = !slot.isOccupied;
        return Response.ok(slot).build();
    }
}

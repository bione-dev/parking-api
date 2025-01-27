package com.example.parking.api;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class ParkingSlot extends PanacheEntity {

    @NotNull
    public String slotNumber;

    public boolean isOccupied;
}

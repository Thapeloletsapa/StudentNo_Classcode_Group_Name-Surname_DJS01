### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

#### Challenge Overview

This challenge invites students to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

![alt text](mars.gif)

Velocity, Distance, and Fuel Calculation
This JavaScript code calculates new velocity, distance, and remaining fuel based on given parameters.

Functions
calcNewVel(vel, acc, time)
Calculates the new velocity based on the initial velocity, acceleration, and time.

vel (number): Initial velocity in km/h.
acc (number): Acceleration in m/s².
time (number): Time in seconds.
Returns the new velocity in km/h.

calcNewDistance(vel, time)
Calculates the new distance based on the new velocity and time.

vel (number): New velocity in km/h.
time (number): Time in seconds.
Returns the new distance in km.

calcRemainingFuel(fuel, fbr, time)
Calculates the remaining fuel based on the initial fuel, fuel burn rate, and time.

fuel (number): Initial fuel in kg.
fbr (number): Fuel burn rate in kg/s.
time (number): Time in seconds.
Returns the remaining fuel in kg.

Usage
To use these functions, simply call them with the required parameters. The functions will return the calculated values, which can then be used for further processing or logging.
// Given parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity based on acceleration
function calcNewVel(vel, acc, time) {
  // Validate inputs
  if (typeof vel!== 'number' || typeof acc!== 'number' || typeof time!== 'number') {
    throw new Error("Invalid parameter types. Expected numbers.");
  }

  if (time < 0) {
    throw new Error("Time must be non-negative.");
  }

  // Convert acceleration from m/s² to km/h²
  const accInKmh = acc * (3600 / 1000);
  const newVelocity = vel + (accInKmh * time);

  return newVelocity;
}

// Calculate new distance in km
function calcNewDistance(vel, time) {
  // Validate inputs
  if (typeof vel!== 'number' || typeof time!== 'number') {
    throw new Error("Invalid parameter types. Expected numbers.");
  }

  if (time < 0) {
    throw new Error("Time must be non-negative.");
  }

  // Convert velocity from km/h to m/s for calculation
  return initialDistance+(velocity * (time / time)); // d + (vel * (time / time))

}

// Calculate remaining fuel
function calcRemainingFuel(fuel, fbr, time) {
  // Validate inputs
  if (typeof fuel!== 'number' || typeof fbr!== 'number' || typeof time!== 'number') {
    throw new Error("Invalid parameter types. Expected numbers.");
  }

  if (time < 0) {
    throw new Error("Time must be non-negative.");
  }

  // Validate fuelBurnRate
  if (typeof fbr!== 'number' || fbr < 0) {
    throw new Error("Invalid fuelBurnRate. Expected non-negative number.");
  }

  // Calculate remaining fuel
  const remainingFuel = fuel - (fbr * time);

  if (remainingFuel < 0) {
    throw new Error("Remaining fuel cannot be negative.");
  }

  return remainingFuel;
}

// Calculate new velocity
const newVelocity = calcNewVel(velocity, acceleration, time);
console.log(`Corrected New Velocity: ${newVelocity} km/h`);

// Calculate new distance
const newDistance = calcNewDistance(newVelocity, time);
console.log(`Corrected New Distance: ${initialDistance + newDistance} km`);

// Calculate remaining fuel
const remainingFuel = calcRemainingFuel(initialFuel, fuelBurnRate, time);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);



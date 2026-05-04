/**
 * analyst.js
 * This module handles the "Intelligence" part of the agent.
 * It calculates a Value Score to compare flights objectively.
 */

function calculateValueScore(flight) {
    // Basic logic: Higher price is bad, more layovers are bad.
    const priceWeight = flight.price;
    const layoverPenalty = (flight.layoverHours || 0) * 50; // $50 penalty per hour of waiting
    
    // Comfort rating (1-10) provided by the LLM's assessment of the airline
    const comfortBonus = (flight.airlineRating || 5) * 20; 

    // Lower score is better (Total "Cost" to the traveler)
    const finalScore = (priceWeight + layoverPenalty) - comfortBonus;
    
    return {
        ...flight,
        valueScore: finalScore.toFixed(2)
    };
}

module.exports = { calculateValueScore };
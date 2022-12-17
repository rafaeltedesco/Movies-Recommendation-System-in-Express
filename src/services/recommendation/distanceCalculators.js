/*
Euclidean distance
(definition)

Definition: The straight line distance between two points. In a plane with p1 at (x1, y1) and p2 at (x2, y2), it is √((x1 - x2)² + (y1 - y2)²).

See also rectilinear, Manhattan distance, Lm distance.

Note: In N dimensions, the Euclidean distance between two points p and q is √(∑i=1N (pi-qi)²) where pi (or qi) is the coordinate of p (or q) in dimension i.

Author: PEB

font: https://xlinux.nist.gov/dads/HTML/euclidndstnc.html
*/

const euclideanDistance = (p1, p2, propertyToCompare, propertyToCalculate, id_field) => {
    let accumulator = 0
    let id = -1
    p1.forEach((object) => {
        const matchedAvaliation = p2.find(
          (userAvaliation) => object[propertyToCompare] === userAvaliation[propertyToCompare]
        );
        id = object[id_field];
        if (!matchedAvaliation) return;
        accumulator += Math.pow(object[propertyToCalculate] - matchedAvaliation[propertyToCalculate], 2);
      });
    return {
        [id_field]: id,
        prob: accumulator > 0
        ? (1 / (1 + Math.sqrt(accumulator))).toFixed(2)
        : (0).toFixed(2),
    }
}

module.exports = {
    euclideanDistance
}
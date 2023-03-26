/**
 * Clamps a `value` between a `min` and `max`, inclusive.
 *
 * @param {Number} min The minimum number of the range.
 * @param {Number} max The maximum number of the range.
 *
 * @returns {Number} The clamped value.
 */
Number.prototype.clamp = function(min, max)
{
    return Math.min(Math.max(this, min), max);
}
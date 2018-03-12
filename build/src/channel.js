"use strict";
/*
 * Constants and utilities for encoding channels (Visual variables)
 * such as 'x', 'y', 'color'.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Channel;
(function (Channel) {
    // Facet
    Channel.ROW = 'row';
    Channel.COLUMN = 'column';
    // Position
    Channel.X = 'x';
    Channel.Y = 'y';
    Channel.X2 = 'x2';
    Channel.Y2 = 'y2';
    // Geo Position
    Channel.LATITUDE = 'latitude';
    Channel.LONGITUDE = 'longitude';
    Channel.LATITUDE2 = 'latitude2';
    Channel.LONGITUDE2 = 'longitude2';
    // Mark property with scale
    Channel.COLOR = 'color';
    Channel.FILL = 'fill';
    Channel.STROKE = 'stroke';
    Channel.SHAPE = 'shape';
    Channel.SIZE = 'size';
    Channel.OPACITY = 'opacity';
    // Non-scale channel
    Channel.TEXT = 'text';
    Channel.ORDER = 'order';
    Channel.DETAIL = 'detail';
    Channel.KEY = 'key';
    Channel.TOOLTIP = 'tooltip';
    Channel.HREF = 'href';
})(Channel = exports.Channel || (exports.Channel = {}));
exports.X = Channel.X;
exports.Y = Channel.Y;
exports.X2 = Channel.X2;
exports.Y2 = Channel.Y2;
exports.LATITUDE = Channel.LATITUDE;
exports.LATITUDE2 = Channel.LATITUDE2;
exports.LONGITUDE = Channel.LONGITUDE;
exports.LONGITUDE2 = Channel.LONGITUDE2;
exports.ROW = Channel.ROW;
exports.COLUMN = Channel.COLUMN;
exports.SHAPE = Channel.SHAPE;
exports.SIZE = Channel.SIZE;
exports.COLOR = Channel.COLOR;
exports.FILL = Channel.FILL;
exports.STROKE = Channel.STROKE;
exports.TEXT = Channel.TEXT;
exports.DETAIL = Channel.DETAIL;
exports.KEY = Channel.KEY;
exports.ORDER = Channel.ORDER;
exports.OPACITY = Channel.OPACITY;
exports.TOOLTIP = Channel.TOOLTIP;
exports.HREF = Channel.HREF;
exports.GEOPOSITION_CHANNEL_INDEX = {
    longitude: 1,
    longitude2: 1,
    latitude: 1,
    latitude2: 1,
};
exports.GEOPOSITION_CHANNELS = util_1.flagKeys(exports.GEOPOSITION_CHANNEL_INDEX);
var UNIT_CHANNEL_INDEX = __assign({ 
    // position
    x: 1, y: 1, x2: 1, y2: 1 }, exports.GEOPOSITION_CHANNEL_INDEX, { 
    // color
    color: 1, fill: 1, stroke: 1, 
    // other non-position with scale
    opacity: 1, size: 1, shape: 1, 
    // channels without scales
    order: 1, text: 1, detail: 1, key: 1, tooltip: 1, href: 1 });
function isColorChannel(channel) {
    return channel === 'color' || channel === 'fill' || channel === 'stroke';
}
exports.isColorChannel = isColorChannel;
var FACET_CHANNEL_INDEX = {
    row: 1,
    column: 1
};
var CHANNEL_INDEX = __assign({}, UNIT_CHANNEL_INDEX, FACET_CHANNEL_INDEX);
exports.CHANNELS = util_1.flagKeys(CHANNEL_INDEX);
var _o = CHANNEL_INDEX.order, _d = CHANNEL_INDEX.detail, SINGLE_DEF_CHANNEL_INDEX = __rest(CHANNEL_INDEX, ["order", "detail"]);
/**
 * Channels that cannot have an array of channelDef.
 * model.fieldDef, getFieldDef only work for these channels.
 *
 * (The only two channels that can have an array of channelDefs are "detail" and "order".
 * Since there can be multiple fieldDefs for detail and order, getFieldDef/model.fieldDef
 * are not applicable for them.  Similarly, selection projection won't work with "detail" and "order".)
 */
exports.SINGLE_DEF_CHANNELS = util_1.flagKeys(SINGLE_DEF_CHANNEL_INDEX);
function isChannel(str) {
    return !!CHANNEL_INDEX[str];
}
exports.isChannel = isChannel;
// CHANNELS without COLUMN, ROW
exports.UNIT_CHANNELS = util_1.flagKeys(UNIT_CHANNEL_INDEX);
// NONPOSITION_CHANNELS = UNIT_CHANNELS without X, Y, X2, Y2;
var _x = UNIT_CHANNEL_INDEX.x, _y = UNIT_CHANNEL_INDEX.y, 
// x2 and y2 share the same scale as x and y
_x2 = UNIT_CHANNEL_INDEX.x2, _y2 = UNIT_CHANNEL_INDEX.y2, _latitude = UNIT_CHANNEL_INDEX.latitude, _longitude = UNIT_CHANNEL_INDEX.longitude, _latitude2 = UNIT_CHANNEL_INDEX.latitude2, _longitude2 = UNIT_CHANNEL_INDEX.longitude2, 
// The rest of unit channels then have scale
NONPOSITION_CHANNEL_INDEX = __rest(UNIT_CHANNEL_INDEX, ["x", "y", "x2", "y2", "latitude", "longitude", "latitude2", "longitude2"]);
exports.NONPOSITION_CHANNELS = util_1.flagKeys(NONPOSITION_CHANNEL_INDEX);
// POSITION_SCALE_CHANNELS = X and Y;
var POSITION_SCALE_CHANNEL_INDEX = { x: 1, y: 1 };
exports.POSITION_SCALE_CHANNELS = util_1.flagKeys(POSITION_SCALE_CHANNEL_INDEX);
// NON_POSITION_SCALE_CHANNEL = SCALE_CHANNELS without X, Y
var 
// x2 and y2 share the same scale as x and y
// text and tooltip have format instead of scale,
// href has neither format, nor scale
_t = NONPOSITION_CHANNEL_INDEX.text, _tt = NONPOSITION_CHANNEL_INDEX.tooltip, _hr = NONPOSITION_CHANNEL_INDEX.href, 
// detail and order have no scale
_dd = NONPOSITION_CHANNEL_INDEX.detail, _k = NONPOSITION_CHANNEL_INDEX.key, _oo = NONPOSITION_CHANNEL_INDEX.order, NONPOSITION_SCALE_CHANNEL_INDEX = __rest(NONPOSITION_CHANNEL_INDEX, ["text", "tooltip", "href", "detail", "key", "order"]);
exports.NONPOSITION_SCALE_CHANNELS = util_1.flagKeys(NONPOSITION_SCALE_CHANNEL_INDEX);
// Declare SCALE_CHANNEL_INDEX
var SCALE_CHANNEL_INDEX = __assign({}, POSITION_SCALE_CHANNEL_INDEX, NONPOSITION_SCALE_CHANNEL_INDEX);
/** List of channels with scales */
exports.SCALE_CHANNELS = util_1.flagKeys(SCALE_CHANNEL_INDEX);
function isScaleChannel(channel) {
    return !!SCALE_CHANNEL_INDEX[channel];
}
exports.isScaleChannel = isScaleChannel;
/**
 * Return whether a channel supports a particular mark type.
 * @param channel  channel name
 * @param mark the mark type
 * @return whether the mark supports the channel
 */
function supportMark(channel, mark) {
    return mark in getSupportedMark(channel);
}
exports.supportMark = supportMark;
/**
 * Return a dictionary showing whether a channel supports mark type.
 * @param channel
 * @return A dictionary mapping mark types to boolean values.
 */
function getSupportedMark(channel) {
    switch (channel) {
        case exports.COLOR:
        case exports.FILL:
        case exports.STROKE:
        case exports.DETAIL:
        case exports.KEY:
        case exports.TOOLTIP:
        case exports.HREF:
        case exports.ORDER: // TODO: revise (order might not support rect, which is not stackable?)
        case exports.OPACITY:
        case exports.ROW:
        case exports.COLUMN:
            return {
                point: true, tick: true, rule: true, circle: true, square: true,
                bar: true, rect: true, line: true, area: true, text: true, geoshape: true
            };
        case exports.X:
        case exports.Y:
        case exports.LATITUDE:
        case exports.LONGITUDE:
            return {
                point: true, tick: true, rule: true, circle: true, square: true,
                bar: true, rect: true, line: true, area: true, text: true
            };
        case exports.X2:
        case exports.Y2:
        case exports.LATITUDE2:
        case exports.LONGITUDE2:
            return {
                rule: true, bar: true, rect: true, area: true
            };
        case exports.SIZE:
            return {
                point: true, tick: true, rule: true, circle: true, square: true,
                bar: true, text: true, line: true
            };
        case exports.SHAPE:
            return { point: true, geoshape: true };
        case exports.TEXT:
            return { text: true };
    }
}
exports.getSupportedMark = getSupportedMark;
function rangeType(channel) {
    switch (channel) {
        case exports.X:
        case exports.Y:
        case exports.SIZE:
        case exports.OPACITY:
        // X2 and Y2 use X and Y scales, so they similarly have continuous range.
        case exports.X2:
        case exports.Y2:
            return 'continuous';
        case exports.ROW:
        case exports.COLUMN:
        case exports.SHAPE:
        // TEXT, TOOLTIP, and HREF have no scale but have discrete output
        case exports.TEXT:
        case exports.TOOLTIP:
        case exports.HREF:
            return 'discrete';
        // Color can be either continuous or discrete, depending on scale type.
        case exports.COLOR:
        case exports.FILL:
        case exports.STROKE:
            return 'flexible';
        // No scale, no range type.
        case exports.LATITUDE:
        case exports.LONGITUDE:
        case exports.LATITUDE2:
        case exports.LONGITUDE2:
        case exports.DETAIL:
        case exports.KEY:
        case exports.ORDER:
            return undefined;
    }
    /* istanbul ignore next: should never reach here. */
    throw new Error('rangeType not implemented for ' + channel);
}
exports.rangeType = rangeType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNSCwrQkFBc0M7QUFFdEMsSUFBaUIsT0FBTyxDQW9DdkI7QUFwQ0QsV0FBaUIsT0FBTztJQUN0QixRQUFRO0lBQ0ssV0FBRyxHQUFVLEtBQUssQ0FBQztJQUNuQixjQUFNLEdBQWEsUUFBUSxDQUFDO0lBRXpDLFdBQVc7SUFDRSxTQUFDLEdBQVEsR0FBRyxDQUFDO0lBQ2IsU0FBQyxHQUFRLEdBQUcsQ0FBQztJQUNiLFVBQUUsR0FBUyxJQUFJLENBQUM7SUFDaEIsVUFBRSxHQUFTLElBQUksQ0FBQztJQUU3QixlQUFlO0lBQ0YsZ0JBQVEsR0FBZSxVQUFVLENBQUM7SUFDbEMsaUJBQVMsR0FBZ0IsV0FBVyxDQUFDO0lBQ3JDLGlCQUFTLEdBQWdCLFdBQVcsQ0FBQztJQUNyQyxrQkFBVSxHQUFpQixZQUFZLENBQUM7SUFFckQsMkJBQTJCO0lBQ2QsYUFBSyxHQUFZLE9BQU8sQ0FBQztJQUV6QixZQUFJLEdBQVcsTUFBTSxDQUFDO0lBRXRCLGNBQU0sR0FBYSxRQUFRLENBQUM7SUFFNUIsYUFBSyxHQUFZLE9BQU8sQ0FBQztJQUN6QixZQUFJLEdBQVcsTUFBTSxDQUFDO0lBQ3RCLGVBQU8sR0FBYyxTQUFTLENBQUM7SUFFNUMsb0JBQW9CO0lBQ1AsWUFBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QixhQUFLLEdBQVksT0FBTyxDQUFDO0lBQ3pCLGNBQU0sR0FBYSxRQUFRLENBQUM7SUFDNUIsV0FBRyxHQUFVLEtBQUssQ0FBQztJQUVuQixlQUFPLEdBQWMsU0FBUyxDQUFDO0lBQy9CLFlBQUksR0FBVyxNQUFNLENBQUM7QUFDckMsQ0FBQyxFQXBDZ0IsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBb0N2QjtBQUlZLFFBQUEsQ0FBQyxHQUFHLE9BQU8sQ0FB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Q0FBQyxZQUFZLENBQUM7UUFFdEIsS0FBSyxXQUFHLENBQUM7UUFDVCxLQUFLLGNBQU0sQ0FBQztRQUNaLEtBQUssYUFBSyxDQUFDO1FBQ1gsaUVBQWlFO1FBQ2pFLEtBQUssWUFBSSxDQUFDO1FBQ1YsS0FBSyxlQUFPLENBQUM7UUFDYixLQUFLLFlBQUk7WUFDUCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRXBCLHVFQUF1RTtRQUN2RSxLQUFLLGFBQUssQ0FBQztRQUNYLEtBQUssWUFBSSxDQUFDO1FBQ1YsS0FBSyxjQUFNO1lBQ1QsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUVwQiwyQkFBMkI7UUFFM0IsS0FBSyxnQkFBUSxDQUFDO1FBQ2QsS0FBSyxpQkFBUyxDQUFDO1FBQ2YsS0FBSyxpQkFBUyxDQUFDO1FBQ2YsS0FBSyxrQkFBVSxDQUFDO1FBQ2hCLEtBQUssY0FBTSxDQUFDO1FBQ1osS0FBSyxXQUFHLENBQUM7UUFDVCxLQUFLLGFBQUs7WUFDUixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBdkNELDhCQXVDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb25zdGFudHMgYW5kIHV0aWxpdGllcyBmb3IgZW5jb2RpbmcgY2hhbm5lbHMgKFZpc3VhbCB2YXJpYWJsZXMpXG4gKiBzdWNoIGFzICd4JywgJ3knLCAnY29sb3InLlxuICovXG5cbmltcG9ydCB7UmFuZ2VUeXBlfSBmcm9tICcuL2NvbXBpbGUvc2NhbGUvdHlwZSc7XG5pbXBvcnQge0VuY29kaW5nfSBmcm9tICcuL2VuY29kaW5nJztcbmltcG9ydCB7RmFjZXRNYXBwaW5nfSBmcm9tICcuL2ZhY2V0JztcbmltcG9ydCB7TWFya30gZnJvbSAnLi9tYXJrJztcbmltcG9ydCB7RmxhZywgZmxhZ0tleXN9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgQ2hhbm5lbCB7XG4gIC8vIEZhY2V0XG4gIGV4cG9ydCBjb25zdCBST1c6ICdyb3cnID0gJ3Jvdyc7XG4gIGV4cG9ydCBjb25zdCBDT0xVTU46ICdjb2x1bW4nID0gJ2NvbHVtbic7XG5cbiAgLy8gUG9zaXRpb25cbiAgZXhwb3J0IGNvbnN0IFg6ICd4JyA9ICd4JztcbiAgZXhwb3J0IGNvbnN0IFk6ICd5JyA9ICd5JztcbiAgZXhwb3J0IGNvbnN0IFgyOiAneDInID0gJ3gyJztcbiAgZXhwb3J0IGNvbnN0IFkyOiAneTInID0gJ3kyJztcblxuICAvLyBHZW8gUG9zaXRpb25cbiAgZXhwb3J0IGNvbnN0IExBVElUVURFOiAnbGF0aXR1ZGUnID0gJ2xhdGl0dWRlJztcbiAgZXhwb3J0IGNvbnN0IExPTkdJVFVERTogJ2xvbmdpdHVkZScgPSAnbG9uZ2l0dWRlJztcbiAgZXhwb3J0IGNvbnN0IExBVElUVURFMjogJ2xhdGl0dWRlMicgPSAnbGF0aXR1ZGUyJztcbiAgZXhwb3J0IGNvbnN0IExPTkdJVFVERTI6ICdsb25naXR1ZGUyJyA9ICdsb25naXR1ZGUyJztcblxuICAvLyBNYXJrIHByb3BlcnR5IHdpdGggc2NhbGVcbiAgZXhwb3J0IGNvbnN0IENPTE9SOiAnY29sb3InID0gJ2NvbG9yJztcblxuICBleHBvcnQgY29uc3QgRklMTDogJ2ZpbGwnID0gJ2ZpbGwnO1xuXG4gIGV4cG9ydCBjb25zdCBTVFJPS0U6ICdzdHJva2UnID0gJ3N0cm9rZSc7XG5cbiAgZXhwb3J0IGNvbnN0IFNIQVBFOiAnc2hhcGUnID0gJ3NoYXBlJztcbiAgZXhwb3J0IGNvbnN0IFNJWkU6ICdzaXplJyA9ICdzaXplJztcbiAgZXhwb3J0IGNvbnN0IE9QQUNJVFk6ICdvcGFjaXR5JyA9ICdvcGFjaXR5JztcblxuICAvLyBOb24tc2NhbGUgY2hhbm5lbFxuICBleHBvcnQgY29uc3QgVEVYVDogJ3RleHQnID0gJ3RleHQnO1xuICBleHBvcnQgY29uc3QgT1JERVI6ICdvcmRlcicgPSAnb3JkZXInO1xuICBleHBvcnQgY29uc3QgREVUQUlMOiAnZGV0YWlsJyA9ICdkZXRhaWwnO1xuICBleHBvcnQgY29uc3QgS0VZOiAna2V5JyA9ICdrZXknO1xuXG4gIGV4cG9ydCBjb25zdCBUT09MVElQOiAndG9vbHRpcCcgPSAndG9vbHRpcCc7XG4gIGV4cG9ydCBjb25zdCBIUkVGOiAnaHJlZicgPSAnaHJlZic7XG59XG5cbmV4cG9ydCB0eXBlIENoYW5uZWwgPSBrZXlvZiBFbmNvZGluZzxhbnk+IHwga2V5b2YgRmFjZXRNYXBwaW5nPGFueT47XG5cbmV4cG9ydCBjb25zdCBYID0gQ2hhbm5lbC5YO1xuZXhwb3J0IGNvbnN0IFkgPSBDaGFubmVsLlk7XG5leHBvcnQgY29uc3QgWDIgPSBDaGFubmVsLlgyO1xuZXhwb3J0IGNvbnN0IFkyID0gQ2hhbm5lbC5ZMjtcblxuZXhwb3J0IGNvbnN0IExBVElUVURFID0gQ2hhbm5lbC5MQVRJVFVERTtcbmV4cG9ydCBjb25zdCBMQVRJVFVERTIgPSBDaGFubmVsLkxBVElUVURFMjtcbmV4cG9ydCBjb25zdCBMT05HSVRVREUgPSBDaGFubmVsLkxPTkdJVFVERTtcbmV4cG9ydCBjb25zdCBMT05HSVRVREUyID0gQ2hhbm5lbC5MT05HSVRVREUyO1xuXG5leHBvcnQgY29uc3QgUk9XID0gQ2hhbm5lbC5ST1c7XG5leHBvcnQgY29uc3QgQ09MVU1OID0gQ2hhbm5lbC5DT0xVTU47XG5leHBvcnQgY29uc3QgU0hBUEUgPSBDaGFubmVsLlNIQVBFO1xuZXhwb3J0IGNvbnN0IFNJWkUgPSBDaGFubmVsLlNJWkU7XG5leHBvcnQgY29uc3QgQ09MT1IgPSBDaGFubmVsLkNPTE9SO1xuXG5leHBvcnQgY29uc3QgRklMTCA9IENoYW5uZWwuRklMTDtcbmV4cG9ydCBjb25zdCBTVFJPS0UgPSBDaGFubmVsLlNUUk9LRTtcbmV4cG9ydCBjb25zdCBURVhUID0gQ2hhbm5lbC5URVhUO1xuZXhwb3J0IGNvbnN0IERFVEFJTCA9IENoYW5uZWwuREVUQUlMO1xuZXhwb3J0IGNvbnN0IEtFWSA9IENoYW5uZWwuS0VZO1xuZXhwb3J0IGNvbnN0IE9SREVSID0gQ2hhbm5lbC5PUkRFUjtcbmV4cG9ydCBjb25zdCBPUEFDSVRZID0gQ2hhbm5lbC5PUEFDSVRZO1xuZXhwb3J0IGNvbnN0IFRPT0xUSVAgPSBDaGFubmVsLlRPT0xUSVA7XG5leHBvcnQgY29uc3QgSFJFRiA9IENoYW5uZWwuSFJFRjtcblxuZXhwb3J0IHR5cGUgR2VvUG9zaXRpb25DaGFubmVsID0gJ2xvbmdpdHVkZScgfCAnbGF0aXR1ZGUnIHwgJ2xvbmdpdHVkZTInIHwgJ2xhdGl0dWRlMic7XG5cbmV4cG9ydCBjb25zdCBHRU9QT1NJVElPTl9DSEFOTkVMX0lOREVYOiBGbGFnPEdlb1Bvc2l0aW9uQ2hhbm5lbD4gPSB7XG4gIGxvbmdpdHVkZTogMSxcbiAgbG9uZ2l0dWRlMjogMSxcbiAgbGF0aXR1ZGU6IDEsXG4gIGxhdGl0dWRlMjogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBHRU9QT1NJVElPTl9DSEFOTkVMUyA9IGZsYWdLZXlzKEdFT1BPU0lUSU9OX0NIQU5ORUxfSU5ERVgpO1xuXG5jb25zdCBVTklUX0NIQU5ORUxfSU5ERVg6IEZsYWc8a2V5b2YgRW5jb2Rpbmc8YW55Pj4gPSB7XG4gIC8vIHBvc2l0aW9uXG4gIHg6IDEsXG4gIHk6IDEsXG4gIHgyOiAxLFxuICB5MjogMSxcblxuICAuLi5HRU9QT1NJVElPTl9DSEFOTkVMX0lOREVYLFxuXG4gIC8vIGNvbG9yXG4gIGNvbG9yOiAxLFxuICBmaWxsOiAxLFxuICBzdHJva2U6IDEsXG5cbiAgLy8gb3RoZXIgbm9uLXBvc2l0aW9uIHdpdGggc2NhbGVcbiAgb3BhY2l0eTogMSxcbiAgc2l6ZTogMSxcbiAgc2hhcGU6IDEsXG5cbiAgLy8gY2hhbm5lbHMgd2l0aG91dCBzY2FsZXNcbiAgb3JkZXI6IDEsXG4gIHRleHQ6IDEsXG4gIGRldGFpbDogMSxcbiAga2V5OiAxLFxuICB0b29sdGlwOiAxLFxuICBocmVmOiAxLFxufTtcblxuZXhwb3J0IHR5cGUgQ29sb3JDaGFubmVsID0gJ2NvbG9yJyB8ICdmaWxsJyB8ICdzdHJva2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvckNoYW5uZWwoY2hhbm5lbDogQ2hhbm5lbCk6IGNoYW5uZWwgaXMgQ29sb3JDaGFubmVsIHtcbiAgcmV0dXJuIGNoYW5uZWwgPT09ICdjb2xvcicgfHwgY2hhbm5lbCA9PT0gJ2ZpbGwnIHx8IGNoYW5uZWwgPT09ICdzdHJva2UnO1xufVxuXG5jb25zdCBGQUNFVF9DSEFOTkVMX0lOREVYOiBGbGFnPGtleW9mIEZhY2V0TWFwcGluZzxhbnk+PiA9IHtcbiAgcm93OiAxLFxuICBjb2x1bW46IDFcbn07XG5cbmNvbnN0IENIQU5ORUxfSU5ERVggPSB7XG4gIC4uLlVOSVRfQ0hBTk5FTF9JTkRFWCxcbiAgLi4uRkFDRVRfQ0hBTk5FTF9JTkRFWFxufTtcblxuZXhwb3J0IGNvbnN0IENIQU5ORUxTID0gZmxhZ0tleXMoQ0hBTk5FTF9JTkRFWCk7XG5cbmNvbnN0IHtvcmRlcjogX28sIGRldGFpbDogX2QsIC4uLlNJTkdMRV9ERUZfQ0hBTk5FTF9JTkRFWH0gPSBDSEFOTkVMX0lOREVYO1xuLyoqXG4gKiBDaGFubmVscyB0aGF0IGNhbm5vdCBoYXZlIGFuIGFycmF5IG9mIGNoYW5uZWxEZWYuXG4gKiBtb2RlbC5maWVsZERlZiwgZ2V0RmllbGREZWYgb25seSB3b3JrIGZvciB0aGVzZSBjaGFubmVscy5cbiAqXG4gKiAoVGhlIG9ubHkgdHdvIGNoYW5uZWxzIHRoYXQgY2FuIGhhdmUgYW4gYXJyYXkgb2YgY2hhbm5lbERlZnMgYXJlIFwiZGV0YWlsXCIgYW5kIFwib3JkZXJcIi5cbiAqIFNpbmNlIHRoZXJlIGNhbiBiZSBtdWx0aXBsZSBmaWVsZERlZnMgZm9yIGRldGFpbCBhbmQgb3JkZXIsIGdldEZpZWxkRGVmL21vZGVsLmZpZWxkRGVmXG4gKiBhcmUgbm90IGFwcGxpY2FibGUgZm9yIHRoZW0uICBTaW1pbGFybHksIHNlbGVjdGlvbiBwcm9qZWN0aW9uIHdvbid0IHdvcmsgd2l0aCBcImRldGFpbFwiIGFuZCBcIm9yZGVyXCIuKVxuICovXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfREVGX0NIQU5ORUxTOiBTaW5nbGVEZWZDaGFubmVsW10gPSBmbGFnS2V5cyhTSU5HTEVfREVGX0NIQU5ORUxfSU5ERVgpO1xuXG4vLyBVc2luZyB0aGUgZm9sbG93aW5nIGxpbmUgbGVhZHMgdG8gVHlwZUVycm9yOiBDYW5ub3QgcmVhZCBwcm9wZXJ0eSAnZWxlbWVudFR5cGVzJyBvZiB1bmRlZmluZWRcbi8vIHdoZW4gcnVubmluZyB0aGUgc2NoZW1hIGdlbmVyYXRvclxuLy8gZXhwb3J0IHR5cGUgU2luZ2xlRGVmQ2hhbm5lbCA9IHR5cGVvZiBTSU5HTEVfREVGX0NIQU5ORUxTWzBdO1xuZXhwb3J0IHR5cGUgU2luZ2xlRGVmQ2hhbm5lbCA9ICd4JyB8ICd5JyB8ICd4MicgfCAneTInIHxcbiAgJ2xvbmdpdHVkZScgfCAnbGF0aXR1ZGUnIHwgJ2xvbmdpdHVkZTInIHwgJ2xhdGl0dWRlMicgfFxuICAncm93JyB8ICdjb2x1bW4nIHxcbiAgJ2NvbG9yJyB8ICdmaWxsJyB8ICdzdHJva2UnIHxcbiAgJ3NpemUnIHwgJ3NoYXBlJyB8ICdvcGFjaXR5JyB8XG4gICd0ZXh0JyB8ICd0b29sdGlwJyB8ICdocmVmJyB8ICdrZXknO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDaGFubmVsKHN0cjogc3RyaW5nKTogc3RyIGlzIENoYW5uZWwge1xuICByZXR1cm4gISFDSEFOTkVMX0lOREVYW3N0cl07XG59XG5cbi8vIENIQU5ORUxTIHdpdGhvdXQgQ09MVU1OLCBST1dcbmV4cG9ydCBjb25zdCBVTklUX0NIQU5ORUxTID0gZmxhZ0tleXMoVU5JVF9DSEFOTkVMX0lOREVYKTtcblxuXG4vLyBOT05QT1NJVElPTl9DSEFOTkVMUyA9IFVOSVRfQ0hBTk5FTFMgd2l0aG91dCBYLCBZLCBYMiwgWTI7XG5jb25zdCB7XG4gIHg6IF94LCB5OiBfeSxcbiAgLy8geDIgYW5kIHkyIHNoYXJlIHRoZSBzYW1lIHNjYWxlIGFzIHggYW5kIHlcbiAgeDI6IF94MiwgeTI6IF95MixcbiAgbGF0aXR1ZGU6IF9sYXRpdHVkZSwgbG9uZ2l0dWRlOiBfbG9uZ2l0dWRlLFxuICBsYXRpdHVkZTI6IF9sYXRpdHVkZTIsIGxvbmdpdHVkZTI6IF9sb25naXR1ZGUyLFxuICAvLyBUaGUgcmVzdCBvZiB1bml0IGNoYW5uZWxzIHRoZW4gaGF2ZSBzY2FsZVxuICAuLi5OT05QT1NJVElPTl9DSEFOTkVMX0lOREVYXG59ID0gVU5JVF9DSEFOTkVMX0lOREVYO1xuXG5leHBvcnQgY29uc3QgTk9OUE9TSVRJT05fQ0hBTk5FTFMgPSBmbGFnS2V5cyhOT05QT1NJVElPTl9DSEFOTkVMX0lOREVYKTtcbmV4cG9ydCB0eXBlIE5vblBvc2l0aW9uQ2hhbm5lbCA9IHR5cGVvZiBOT05QT1NJVElPTl9DSEFOTkVMU1swXTtcblxuLy8gUE9TSVRJT05fU0NBTEVfQ0hBTk5FTFMgPSBYIGFuZCBZO1xuY29uc3QgUE9TSVRJT05fU0NBTEVfQ0hBTk5FTF9JTkRFWDoge3g6MSwgeToxfSA9IHt4OjEsIHk6MX07XG5leHBvcnQgY29uc3QgUE9TSVRJT05fU0NBTEVfQ0hBTk5FTFMgPSBmbGFnS2V5cyhQT1NJVElPTl9TQ0FMRV9DSEFOTkVMX0lOREVYKTtcbmV4cG9ydCB0eXBlIFBvc2l0aW9uU2NhbGVDaGFubmVsID0gdHlwZW9mIFBPU0lUSU9OX1NDQUxFX0NIQU5ORUxTWzBdO1xuXG4vLyBOT05fUE9TSVRJT05fU0NBTEVfQ0hBTk5FTCA9IFNDQUxFX0NIQU5ORUxTIHdpdGhvdXQgWCwgWVxuY29uc3Qge1xuICAvLyB4MiBhbmQgeTIgc2hhcmUgdGhlIHNhbWUgc2NhbGUgYXMgeCBhbmQgeVxuICAvLyB0ZXh0IGFuZCB0b29sdGlwIGhhdmUgZm9ybWF0IGluc3RlYWQgb2Ygc2NhbGUsXG4gIC8vIGhyZWYgaGFzIG5laXRoZXIgZm9ybWF0LCBub3Igc2NhbGVcbiAgdGV4dDogX3QsIHRvb2x0aXA6IF90dCwgaHJlZjogX2hyLFxuICAvLyBkZXRhaWwgYW5kIG9yZGVyIGhhdmUgbm8gc2NhbGVcbiAgZGV0YWlsOiBfZGQsIGtleTogX2ssIG9yZGVyOiBfb28sXG4gIC4uLk5PTlBPU0lUSU9OX1NDQUxFX0NIQU5ORUxfSU5ERVhcbn0gPSBOT05QT1NJVElPTl9DSEFOTkVMX0lOREVYO1xuZXhwb3J0IGNvbnN0IE5PTlBPU0lUSU9OX1NDQUxFX0NIQU5ORUxTID0gZmxhZ0tleXMoTk9OUE9TSVRJT05fU0NBTEVfQ0hBTk5FTF9JTkRFWCk7XG5leHBvcnQgdHlwZSBOb25Qb3NpdGlvblNjYWxlQ2hhbm5lbCA9IHR5cGVvZiBOT05QT1NJVElPTl9TQ0FMRV9DSEFOTkVMU1swXTtcblxuLy8gRGVjbGFyZSBTQ0FMRV9DSEFOTkVMX0lOREVYXG5jb25zdCBTQ0FMRV9DSEFOTkVMX0lOREVYID0ge1xuICAuLi5QT1NJVElPTl9TQ0FMRV9DSEFOTkVMX0lOREVYLFxuICAuLi5OT05QT1NJVElPTl9TQ0FMRV9DSEFOTkVMX0lOREVYXG59O1xuXG4vKiogTGlzdCBvZiBjaGFubmVscyB3aXRoIHNjYWxlcyAqL1xuZXhwb3J0IGNvbnN0IFNDQUxFX0NIQU5ORUxTID0gZmxhZ0tleXMoU0NBTEVfQ0hBTk5FTF9JTkRFWCk7XG5leHBvcnQgdHlwZSBTY2FsZUNoYW5uZWwgPSB0eXBlb2YgU0NBTEVfQ0hBTk5FTFNbMF07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NjYWxlQ2hhbm5lbChjaGFubmVsOiBDaGFubmVsKTogY2hhbm5lbCBpcyBTY2FsZUNoYW5uZWwge1xuICByZXR1cm4gISFTQ0FMRV9DSEFOTkVMX0lOREVYW2NoYW5uZWxdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1cHBvcnRlZE1hcmsge1xuICBwb2ludD86IGJvb2xlYW47XG4gIHRpY2s/OiBib29sZWFuO1xuICBydWxlPzogYm9vbGVhbjtcbiAgY2lyY2xlPzogYm9vbGVhbjtcbiAgc3F1YXJlPzogYm9vbGVhbjtcbiAgYmFyPzogYm9vbGVhbjtcbiAgcmVjdD86IGJvb2xlYW47XG4gIGxpbmU/OiBib29sZWFuO1xuICBnZW9zaGFwZT86IGJvb2xlYW47XG4gIGFyZWE/OiBib29sZWFuO1xuICB0ZXh0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBSZXR1cm4gd2hldGhlciBhIGNoYW5uZWwgc3VwcG9ydHMgYSBwYXJ0aWN1bGFyIG1hcmsgdHlwZS5cbiAqIEBwYXJhbSBjaGFubmVsICBjaGFubmVsIG5hbWVcbiAqIEBwYXJhbSBtYXJrIHRoZSBtYXJrIHR5cGVcbiAqIEByZXR1cm4gd2hldGhlciB0aGUgbWFyayBzdXBwb3J0cyB0aGUgY2hhbm5lbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydE1hcmsoY2hhbm5lbDogQ2hhbm5lbCwgbWFyazogTWFyaykge1xuICByZXR1cm4gbWFyayBpbiBnZXRTdXBwb3J0ZWRNYXJrKGNoYW5uZWwpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGRpY3Rpb25hcnkgc2hvd2luZyB3aGV0aGVyIGEgY2hhbm5lbCBzdXBwb3J0cyBtYXJrIHR5cGUuXG4gKiBAcGFyYW0gY2hhbm5lbFxuICogQHJldHVybiBBIGRpY3Rpb25hcnkgbWFwcGluZyBtYXJrIHR5cGVzIHRvIGJvb2xlYW4gdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkTWFyayhjaGFubmVsOiBDaGFubmVsKTogU3VwcG9ydGVkTWFyayB7XG4gIHN3aXRjaCAoY2hhbm5lbCkge1xuICAgIGNhc2UgQ09MT1I6XG4gICAgY2FzZSBGSUxMOlxuICAgIGNhc2UgU1RST0tFOlxuXG4gICAgY2FzZSBERVRBSUw6XG4gICAgY2FzZSBLRVk6XG4gICAgY2FzZSBUT09MVElQOlxuICAgIGNhc2UgSFJFRjpcbiAgICBjYXNlIE9SREVSOiAgICAvLyBUT0RPOiByZXZpc2UgKG9yZGVyIG1pZ2h0IG5vdCBzdXBwb3J0IHJlY3QsIHdoaWNoIGlzIG5vdCBzdGFja2FibGU/KVxuICAgIGNhc2UgT1BBQ0lUWTpcbiAgICBjYXNlIFJPVzpcbiAgICBjYXNlIENPTFVNTjpcbiAgICAgIHJldHVybiB7IC8vIGFsbCBtYXJrc1xuICAgICAgICBwb2ludDogdHJ1ZSwgdGljazogdHJ1ZSwgcnVsZTogdHJ1ZSwgY2lyY2xlOiB0cnVlLCBzcXVhcmU6IHRydWUsXG4gICAgICAgIGJhcjogdHJ1ZSwgcmVjdDogdHJ1ZSwgbGluZTogdHJ1ZSwgYXJlYTogdHJ1ZSwgdGV4dDogdHJ1ZSwgZ2Vvc2hhcGU6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBYOlxuICAgIGNhc2UgWTpcbiAgICBjYXNlIExBVElUVURFOlxuICAgIGNhc2UgTE9OR0lUVURFOlxuICAgICAgcmV0dXJuIHsgLy8gYWxsIG1hcmtzIGV4Y2VwdCBnZW9zaGFwZS4gZ2Vvc2hhcGUgZG9lcyBub3QgdXNlIFgsIFkgLS0gaXQgdXNlcyBhIHByb2plY3Rpb25cbiAgICAgICAgcG9pbnQ6IHRydWUsIHRpY2s6IHRydWUsIHJ1bGU6IHRydWUsIGNpcmNsZTogdHJ1ZSwgc3F1YXJlOiB0cnVlLFxuICAgICAgICBiYXI6IHRydWUsIHJlY3Q6IHRydWUsIGxpbmU6IHRydWUsIGFyZWE6IHRydWUsIHRleHQ6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBYMjpcbiAgICBjYXNlIFkyOlxuICAgIGNhc2UgTEFUSVRVREUyOlxuICAgIGNhc2UgTE9OR0lUVURFMjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJ1bGU6IHRydWUsIGJhcjogdHJ1ZSwgcmVjdDogdHJ1ZSwgYXJlYTogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIFNJWkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb2ludDogdHJ1ZSwgdGljazogdHJ1ZSwgcnVsZTogdHJ1ZSwgY2lyY2xlOiB0cnVlLCBzcXVhcmU6IHRydWUsXG4gICAgICAgIGJhcjogdHJ1ZSwgdGV4dDogdHJ1ZSwgbGluZTogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIFNIQVBFOlxuICAgICAgcmV0dXJuIHtwb2ludDogdHJ1ZSwgZ2Vvc2hhcGU6IHRydWV9O1xuICAgIGNhc2UgVEVYVDpcbiAgICAgIHJldHVybiB7dGV4dDogdHJ1ZX07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlVHlwZShjaGFubmVsOiBDaGFubmVsKTogUmFuZ2VUeXBlIHtcbiAgc3dpdGNoIChjaGFubmVsKSB7XG4gICAgY2FzZSBYOlxuICAgIGNhc2UgWTpcbiAgICBjYXNlIFNJWkU6XG4gICAgY2FzZSBPUEFDSVRZOlxuICAgIC8vIFgyIGFuZCBZMiB1c2UgWCBhbmQgWSBzY2FsZXMsIHNvIHRoZXkgc2ltaWxhcmx5IGhhdmUgY29udGludW91cyByYW5nZS5cbiAgICBjYXNlIFgyOlxuICAgIGNhc2UgWTI6XG4gICAgICByZXR1cm4gJ2NvbnRpbnVvdXMnO1xuXG4gICAgY2FzZSBST1c6XG4gICAgY2FzZSBDT0xVTU46XG4gICAgY2FzZSBTSEFQRTpcbiAgICAvLyBURVhULCBUT09MVElQLCBhbmQgSFJFRiBoYXZlIG5vIHNjYWxlIGJ1dCBoYXZlIGRpc2NyZXRlIG91dHB1dFxuICAgIGNhc2UgVEVYVDpcbiAgICBjYXNlIFRPT0xUSVA6XG4gICAgY2FzZSBIUkVGOlxuICAgICAgcmV0dXJuICdkaXNjcmV0ZSc7XG5cbiAgICAvLyBDb2xvciBjYW4gYmUgZWl0aGVyIGNvbnRpbnVvdXMgb3IgZGlzY3JldGUsIGRlcGVuZGluZyBvbiBzY2FsZSB0eXBlLlxuICAgIGNhc2UgQ09MT1I6XG4gICAgY2FzZSBGSUxMOlxuICAgIGNhc2UgU1RST0tFOlxuICAgICAgcmV0dXJuICdmbGV4aWJsZSc7XG5cbiAgICAvLyBObyBzY2FsZSwgbm8gcmFuZ2UgdHlwZS5cblxuICAgIGNhc2UgTEFUSVRVREU6XG4gICAgY2FzZSBMT05HSVRVREU6XG4gICAgY2FzZSBMQVRJVFVERTI6XG4gICAgY2FzZSBMT05HSVRVREUyOlxuICAgIGNhc2UgREVUQUlMOlxuICAgIGNhc2UgS0VZOlxuICAgIGNhc2UgT1JERVI6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzaG91bGQgbmV2ZXIgcmVhY2ggaGVyZS4gKi9cbiAgdGhyb3cgbmV3IEVycm9yKCdyYW5nZVR5cGUgbm90IGltcGxlbWVudGVkIGZvciAnICsgY2hhbm5lbCk7XG59XG4iXX0=
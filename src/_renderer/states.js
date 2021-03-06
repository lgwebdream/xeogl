/**
 * Renderer states
 */
(function () {

    "use strict";

    xeogl.renderer = xeogl.renderer || {};


    /**

     Base class for Renderer states.

     renderer.State
     @module xeogl

     @constructor
     @param cfg {*} Configs
     */
    xeogl.renderer.State = Class.extend({

        __init: function (cfg) {

            this.id = this._ids.addItem({});

            this.hash = cfg.hash || "" + this.id; // Not used by all sub-classes

            for (var key in cfg) {
                if (cfg.hasOwnProperty(key)) {
                    this[key] = cfg[key];
                }
            }
        },

        destroy: function () {
            this._ids.removeItem(this.id);
        }
    });

    //xeogl.renderer.State.prototype.destroy = function () {
    //    states.removeItem(this.id);
    //};

    /**

     Visibility state.

     renderer.Visibility
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @param cfg.visible {Boolean} Flag which controls visibility of the associated render objects.
     @extends renderer.State
     */
    xeogl.renderer.Visibility = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Culling state.

     renderer.Cull
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @param cfg.culled {Boolean} Flag which controls cull state of the associated render objects.
     @extends renderer.State
     */
    xeogl.renderer.Cull = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Modes state.

     renderer.Mode
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @param cfg.pickable {Boolean} Flag which controls pickability of the associated render objects.
     @param cfg.clipping {Boolean} Flag which controls whether associated render objects are clippable.
     @param cfg.xray {Boolean} Flag which controls transparency of the associated render objects.
     @param cfg.frontFace {Boolean} Flag which determines winding order of backfaces on the associated render objects - true == "ccw", false == "cw".
     @extends renderer.State
     */
    xeogl.renderer.Modes = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Layer state.

     renderer.Layer
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @param cfg.priority {Number} Layer render priority.
     @extends renderer.State
     */
    xeogl.renderer.Layer = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Renderer lights state.

     renderer.Lights
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @param cfg.colorMask {Array of Object} The light sources
     @extends renderer.State
     */
    xeogl.renderer.Lights = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     PhongMaterial state.

     renderer.PhongMaterial
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.PhongMaterial = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     PBR specular-glossiness material state.

     renderer.SpecularMaterial
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.SpecularMaterial = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     PBR metallic-roughness material state.

     renderer.MetallicMaterial
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.MetallicMaterial = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Transform state.

     renderer.Transform
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.Transform = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Billboard transform state.

     renderer.Billboard
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.Billboard = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Clip planes state.

     renderer.Clips
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.Clips = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Renderer morph targets state.

     renderer.MorphTargets
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.MorphTargets = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Texture state.

     renderer.Texture
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.Texture = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Cube texture state.

     renderer.CubeTexture
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.CubeTexture = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Fresnel state.

     renderer.Fresnel
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.Fresnel = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });


    /**

     Geometry state.

     renderer.Geometry
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.Geometry = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Program state.

     renderer.ProgramState
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.ProgramState = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Viewport state.

     renderer.Viewport
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @param cfg.boundary {Float32Array} Canvas-space viewport extents.
     @extends renderer.State
     */
    xeogl.renderer.Viewport = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     Outline state.

     renderer.Outline
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @param [cfg.thickness=15] {Number} Thickness of the outline in pixels.
     @param [cfg.color=[1,0,0]] {Array of Number} The outline color,
     @extends renderer.State
     */
    xeogl.renderer.Outline = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });

    /**

     XRay state.

     renderer.XRay
     @module xeogl

     @constructor
     @param cfg {*} Configs
     @extends renderer.State
     */
    xeogl.renderer.XRay = xeogl.renderer.State.extend({
        _ids: new xeogl.utils.Map({})
    });
})();


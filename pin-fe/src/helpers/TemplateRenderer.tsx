import React, { useState } from "react";
import { TemplateContext } from "../contexts/TemplateContext";

export default class TemplateRenderer {
  constructor() {
    this.renderers = {};
    this.initRenderers();
  }

  initRenderers() {
    try {
      this.registerImageRenderer();
      this.registerTextRenderer();
      this.registerBoxRenderer();
    } catch (e) {
      console.error(e);
    }
  }
  registerImageRenderer() {
    this.registerRenderer("image", (comp: any, componentIndex: number) => {
      const { wrapperStyles, styles, imageUrl, imageStyles, type } = comp;
      return this.renderWithCondition(
        comp,
        <TemplateContext.Consumer key={`${type}-${componentIndex}`}>
          {({ selectComponent, initTemplateRef }) => {
            return (
              <div
                className="Pin-Component__Image"
                onClick={() => selectComponent(componentIndex)}
                ref={(el) => initTemplateRef(el, componentIndex)}
                style={wrapperStyles}
              >
                <div style={styles}>
                  <img style={imageStyles} src={imageUrl} />
                </div>
              </div>
            );
          }}
        </TemplateContext.Consumer>
      );
    });
  }
  registerTextRenderer() {
    this.registerRenderer("text", (comp: any, componentIndex: number) => {
      const { wrapperStyles, styles, textContent, type } = comp;

      return this.renderWithCondition(
        comp,
        <TemplateContext.Consumer key={`${type}-${componentIndex}`}>
          {({ selectComponent, initTemplateRef, onTextChange }) => {
            let temp = textContent;
            return (
              <div
                className="Pin-Component__Text"
                onClick={() => selectComponent(componentIndex)}
                ref={(el) => initTemplateRef(el, componentIndex)}
                style={wrapperStyles}
              >
                <div
                  style={styles}
                  contentEditable={true}
                  onInput={(e) => (temp = e.currentTarget.textContent)}
                  onBlur={() => onTextChange(temp)}
                  dangerouslySetInnerHTML={{ __html: temp }}
                ></div>
              </div>
            );
          }}
        </TemplateContext.Consumer>
      );
    });
  }
  registerBoxRenderer() {
    this.registerRenderer("box", (comp: any, componentIndex: number) => {
      const { wrapperStyles, styles, type } = comp;

      return this.renderWithCondition(
        comp,
        <TemplateContext.Consumer key={`${type}-${componentIndex}`}>
          {({ selectComponent, initTemplateRef }) => {
            return (
              <div
                className="Pin-Component__Box"
                onClick={() => selectComponent(componentIndex)}
                ref={(el) => initTemplateRef(el, componentIndex)}
                style={wrapperStyles}
              >
                <div style={styles}></div>
              </div>
            );
          }}
        </TemplateContext.Consumer>
      );
    });
  }

  registerRenderer(index: any, renderer: any) {
    this.renderers[index] = renderer;
  }

  render(index: any, comp: any, componentIndex: number) {
    return this?.renderers?.[index]?.(comp, componentIndex);
  }

  renderWithCondition(comp: any, element: any) {
    return comp && element;
  }
}

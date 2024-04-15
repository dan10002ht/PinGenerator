import React from "react";
import "./Template.scss";
import { TemplateContextProvider } from "../../../contexts/TemplateContext";
import TemplateRenderer from "../../../helpers/TemplateRenderer";

const templateRenderer = new TemplateRenderer();

export default function Template({
  template,
  onSelectComponent,
  setComponentRef = () => {},
  size = { width: 1000, height: 1500 },
  scale = 0.2,
  onTextChange = () => {},
}: any) {
  const realSize = {
    width: `${size.width}px`,
    height: `${size.height}px`,
  };
  const scaleSize = {
    width: `${size.width * scale}px`,
    height: `${size.height * scale}px`,
  };
  const initTemplateRef = (el: any, index: number) => {
    setComponentRef(el, `${template.id}-${index}`);
  };
  const selectComponent = (index: number) => {
    onSelectComponent(`${template.id}-${index}`);
  };

  return (
    <TemplateContextProvider
      value={{ selectComponent, initTemplateRef, onTextChange }}
    >
      <div className="Pin-Template__DesignContainer">
        <div className="Pin-Template__TemplateContainer">
          <div className="Pin-Template__ImageContainer" style={scaleSize}>
            <div
              className="Pin-Template__ImageContainer--Scale"
              style={{ ...realSize, transform: `scale(${scale})` }}
            >
              <div className="Pin-Template__ImageContainer--RealSize">
                <div
                  className="Pin-Template__ComponentContainer"
                  style={realSize}
                >
                  {template.components.map((component: any, index: number) => {
                    return templateRenderer.render(
                      component.type,
                      component,
                      index
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Pin-Template__ActionContainer"></div>
      </div>
    </TemplateContextProvider>
  );
}

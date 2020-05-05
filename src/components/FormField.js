import React from "react";

function FormField(props) {
  const { error, type, inputRef, ...inputProps } = props;

  return (
    <div className="field">
      {props.label && (
        <label className="label" for="">
          {props.label}
        </label>
      )}

      <div className="control">
        {type === "textarea" && (
          <textarea
            className="textarea is-medium"
            ref={inputRef}
            {...inputProps}
          ></textarea>
        )}

        {type !== "textarea" && (
          <input
            className="input is-medium"
            ref={inputRef}
            type={type}
            {...inputProps}
          ></input>
        )}
      </div>

      {error && <p className="help is-danger">{error.message}</p>}
    </div>
  );
}

export default FormField;

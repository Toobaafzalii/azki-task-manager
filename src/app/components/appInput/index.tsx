import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

interface AppInputProps {
  label: string;
  value?: string;
  onChange?: (value: string, isValid: boolean) => void;
  required?: boolean;
  type?: "text" | "email" | "number";
  error?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  onChange,
  required = true,
  type = "text",
  error = false,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    let valid = true;
    if (required && !value) valid = false;
    if (type === "email" && value) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    setIsValid(valid);
    onChange?.(value, valid);
  };

  return (
    <TextField
      size="small"
      label={label}
      required={required}
      type={type}
      value={value}
      onChange={handleChange}
      error={error || (required && !isValid && !!inputValue)}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#fff" },
          "&:hover fieldset": { borderColor: "#fff" },
          "&.Mui-focused fieldset": { borderColor: "#fff" },
        },
        "& .MuiInputLabel-root": {
          color: "#fff",
          "&.Mui-focused": { color: "#fff" },
        },
        width: "96%",
        margin: "10px",
      }}
    />
  );
};

export default AppInput;

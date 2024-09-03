import React, { useState } from "react";
import { 
  Form, 
  Input,
  FormGroup, 
  FormFeedback, 
  Label, 
  Button,
  Alert
} from "reactstrap";
import { registerUser, loginUser } from "../services/auth.service";
import { useAuth } from "../hooks/use-auth";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (!isLogin && !formData.name) formErrors.name = "Name is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    try {
      const { email, password, name } = formData;
      const token = isLogin ? await loginUser(email, password) : await registerUser(name, email, password);
      login(token);
      navigate("/");
    } catch (e) {
      setMessage(e.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormType = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setMessage("");
    setFormData({ name: "", email: "", password: "" });
  };

  const handleFocus = () => {
    setMessage("");
  };

  return (
    <main className="flex flex-col items-center justify-center w-[100%] h-[100vh] bg-gray-50">
      <Form className="rounded-xl shadow-lg p-8 w-auto h-auto flex flex-col gap-2" onSubmit={handleSubmit}>
        <h1 className="text-black text-2xl">{isLogin ? "Login" : "Register"}</h1>
        {message && <Alert color="danger">{message}</Alert>}
        {!isLogin && (
          <FormGroup floating className="position-relative">
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
              size={50}
              value={formData.name}
              onChange={handleChange}
              invalid={!!errors.name}
              onFocus={handleFocus}
            />
            <Label for="name">Name</Label>
            {errors.name && (
              <FormFeedback tooltip>
                {errors.name}
              </FormFeedback>
            )}
          </FormGroup>
        )}
        <FormGroup floating className="position-relative">
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            size={50}
            value={formData.email}
            onChange={handleChange}
            invalid={!!errors.email}
            onFocus={handleFocus}
          />
          <Label for="email">Email</Label>
          {errors.email && (
            <FormFeedback tooltip>
              {errors.email}
            </FormFeedback>
          )}
        </FormGroup>
        <FormGroup floating className="position-relative">
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            invalid={!!errors.password}
            onFocus={handleFocus}
          />
          <Label for="password">Password</Label>
          {errors.name && (
            <FormFeedback tooltip>
              {errors.name}
            </FormFeedback>
          )}
        </FormGroup>
        <Button type="submit" size="lg" className="bg-black text-2xl">
          {isLogin ? "Login" : "Register"}
        </Button>
        {isLogin && (
          <a href="#" className="self-center mt-1 text-blue-500 no-underline text-xl">
            Forgot Password?
          </a>
        )}
        <p className="self-center text-xl">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            type="button"
            className="bg-transparent w-auto h-auto border-none cursor-pointer text-blue-500"
            onClick={handleFormType}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </Form>
    </main>
  );
};
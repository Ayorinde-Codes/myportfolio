import http from "./common/http-common";

const login = data => {

  return http.post("/login", data);
};

const forgot = data => {
  return http.post("/forgot", data)
}

const reset = data => {
  return http.post("/reset", data)
}

const user = (config =null) => {
    
  return http.get("/user/show", config);
};

const myExperience = () => {
  return http.get("/experience");
}

const skills = () => {
  return http.get("/skills")
}

const portfolio = () => {
  return http.get("/portfolio")
}

const getCategory = () => {
  return http.get("/category")
}

const getSingleCategory = (id) => {
  return http.get(`/category${id}`)
}

const contactme = data => {
  return http.post("/contactme", data);
};

const testimonial = () => {
  return http.get("/testimonials")
}

export default {
  login,
  forgot,
  reset,
  user,
  myExperience,
  skills,
  portfolio,
  getCategory,
  getSingleCategory,
  contactme,
  testimonial
};
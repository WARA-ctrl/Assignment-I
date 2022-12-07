// import React, { ChangeEvent, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SearchInput: React.FC = () => {
//   const [query, setQuery] = useState("");
//   const history = useNavigate();

//   function onChange(e: ChangeEvent<HTMLInputElement>) {
//     setQuery(e.target.value);
//   }

//   useEffect(() => {
//     const params = new URLSearchParams();
//     if (query) {
//       params.append("name", query);
//     } else {
//       params.delete("name");
//     }
//     history.push({ search: params.toString() });
//   }, [query, history]);

//   return <input type="text" value={query} onChange={onChange} />;
// };

// export default SearchInput;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [lastName] = useState("");
  const [tel] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  function onChange(e) {
    setQuery(e.target.value);
  }
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  useEffect(() => {
    // const params = new URLSearchParams();
    // if (query) {
    //   params.append("name", query);
    // } else {
    //   params.delete("name");
    // }

    history(`?name=${name}&email=${email}`);

    // history.push({ search: params.toString() });
  }, [query, history, name, email]);

  return (
    <div className="containerrr">
      <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={name}
              onChange={onChangeName}
            />
            <label for="floatingInput">First name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingInput">Last name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Telephone</label>
          </div>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingPassword"
              placeholder="Email address"
              value={email}
              onChange={onChangeEmail}
            />
            <label for="floatingPassword">Email address</label>
          </div>
          <div class="form-floating">
            <input
              class="form-control"
              id="floatingPassword"
              placeholder="Ref"
              value={query}
              onChange={onChange}
            />
            <label for="floatingPassword">Ref</label>
          </div>
          <br></br>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default SearchInput;

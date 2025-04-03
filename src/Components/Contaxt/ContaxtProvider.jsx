import React, { useEffect, useState } from "react";
import MyContaxt from "./MyContaxt";
import ExclusiveDeals from "../Data";

const ContaxtProvider = ({ children }) => {
  const [exclusiveDeal] = useState(ExclusiveDeals);

  //Store All the users
  const [users, setUsers] = useState([]);
  //Store the currenUser
  const [currentUser, setCurrentUser] = useState(null);
  //Toggle the cart
  const [toggleCart, setToggleCart] = useState(false);
  //Cart data
  const [cart, setCart] = useState([]);

  //Toggle the cart
  const ToggleCartDetails = () => {
    setToggleCart(!toggleCart);
  };

  //Fecth the users from the localstorage
  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    // ✅ Only update state if usersData exists
    if (usersData) {
      setUsers(usersData);
    }
  }, []);

  //Get the CurrentUser
  useEffect(() => {
    const currentUserData = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUserData) {
      setCurrentUser(currentUserData);

      //get the currenuser cart data logged in user
      const userCart =
        users.find((user) => user.email === currentUser.email)?.cart || [];
      setCart(userCart);
    }
  }, [users]);

  //Add the items to the cart
  const addToCart = (item) => {
    //if the current user does not exist
    if (!currentUser) {
      alert("Please login to add the cart");
      return;
    }
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    alert("Added to the cart");
    // Update currentUser cart
    const updatedCurrentUser = { ...currentUser, cart: updatedCart };
    setCurrentUser(updatedCurrentUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    // Update users list
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? updatedCurrentUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const deleteCartItem = (itemToRemove) => {
    if (!currentUser) {
      alert("Please login to modify the cart");
      return;
    }

    // Check if itemToRemove has an id
    if (!itemToRemove.id) {
      console.error("Item does not have an ID:", itemToRemove);
      return;
    }

    // Remove only the first occurrence of the item by id
    const indexToRemove = cart.findIndex((item) => item.id === itemToRemove.id);

    if (indexToRemove === -1) {
      console.warn("Item not found in cart:", itemToRemove);
      return;
    }

    // Create a shallow copy of the cart and remove the specific item
    const updatedCart = [...cart];
    updatedCart.splice(indexToRemove, 1); // Remove only one occurrence

    setCart(updatedCart);

    // Update currentUser cart
    const updatedCurrentUser = { ...currentUser, cart: updatedCart };
    setCurrentUser(updatedCurrentUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    // Update users list
    const updatedUsers = users.map((user) =>
      user.email === updatedCurrentUser.email ? updatedCurrentUser : user
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const updateCartItemQuantity = (itemId) => {
    if (!currentUser) {
      console.log("Please login to modify the cart");
      return;
    }

    const updateCart = cart.map((item) => {
      if (item.id === itemId) {
        console.log("Cart updating", item);
        return {
          ...item,
          quantity: item.quantity + 1, //increase quantity of the cart
          prize: item.prize * 2, //Double the prize
        };
      }
      return item;
    });

    //set the cart updated
    setCart(updateCart);

    //updating the currenUser cart;
    const updatedCurrenUser = { ...currentUser, cart: updateCart };
    setCurrentUser(updatedCurrenUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrenUser));

    //update the userscart;
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? updatedCurrenUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <MyContaxt.Provider
      value={{
        users,
        setUsers,
        exclusiveDeal,
        currentUser,
        setCurrentUser,
        toggleCart,
        setToggleCart,
        ToggleCartDetails,
        addToCart,
        cart,
        deleteCartItem,
        updateCartItemQuantity,
      }}
    >
      {children}
    </MyContaxt.Provider>
  );
};

export default ContaxtProvider;

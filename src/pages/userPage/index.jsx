// import React, { useState } from "react";
// import {
//   Error,
//   FormContainer,
//   FormField,
//   IsSaved,
//   UserFormWrapper,
//   UserPageContainer,
//   UserPageTitle,
// } from "./userPage.styles";
// import { Link } from "react-router-dom";
// import { CustomButton } from "../../components/Button/CustomButtons";

// const UserPage = ({ setUserData, userData }) => {
//   const [error, setError] = useState("");
//   const [isSave, setIsSaved] = useState(false);

//   const handleUserDataChange = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setUserData({ ...userData, [name]: value });
//     setError("");
//     setIsSaved(false);
//   };

//   const submitHandler = (event) => {
//     if (userData.firstName !== "" && userData.lastName !== "") {
//       localStorage.setItem("userData", JSON.stringify(userData));
//       setIsSaved(true);
//     } else {
//       setError("Ошибка сохранения данных, не все поля заполнены");
//       setIsSaved(false);
//     }
//     event.preventDefault();
//   };

//   return (
//     <>
//       <UserPageContainer>
//         <UserPageTitle>Страница пользователя</UserPageTitle>
//         <UserFormWrapper>
//           <FormContainer action="">
//             <FormField>
//               <label for="name">Введите ваше имя: </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 id="name"
//                 placeholder="Имя"
//                 value={userData.firstName}
//                 onChange={handleUserDataChange}
//                 required
//               />
//             </FormField>
//             <FormField>
//               <label for="name">Введите вашу фамилию: </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 id="surname"
//                 placeholder="Фамилия"
//                 value={userData.lastName}
//                 onChange={handleUserDataChange}
//                 required
//               />
//             </FormField>
//             <FormField>
//               {error ? <Error>{error}</Error> : ""}
//               {isSave ? (
//                 <IsSaved>Готово!</IsSaved>
//               ) : (
//                 <CustomButton
//                   type="submit"
//                   onClick={submitHandler}
//                   disabled={isSave}
//                   width="100px">
//                   {isSave ? "Готово!" : "Сохранить"}
//                 </CustomButton>
//               )}

//               {isSave ? (
//                 <Link to="/">
//                   <CustomButton width="100px">К календарю</CustomButton>
//                 </Link>
//               ) : (
//                 <Link to="/">
//                   <CustomButton width="100px">Назад</CustomButton>
//                 </Link>
//               )}
//             </FormField>
//           </FormContainer>
//         </UserFormWrapper>
//       </UserPageContainer>
//     </>
//   );
// };

// export default UserPage;

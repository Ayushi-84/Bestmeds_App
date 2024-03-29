import React, { Component, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { ServerURL } from "../Services/FetchNodeServices";
import { View,Text } from "react-native";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import RazorpayCheckout from 'react-native-razorpay'
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
  margin: {
    marginRight: "80%",
    paddingLeft: "",
  },
  button: {
    margin: theme.spacing.unit,
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const PaymentGateway = (props) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36D7B7");
  var user=useSelector(state=>state.user)
  var userData=Object.values(user)[0]

  const options = {
    key: "rzp_test_GQ6XaPC6gMPNwH",
    amount: props.route.params.price*100, //  = INR 1
    name: "BestMeds.com",
    // description: 'some description',
    image:
      `${ServerURL}/images/logo.jpg`,
    handler: function (response) {
      // handleRazorpay(response.razorpay_payment_id)
      // props.addnewrecord()
      alert(response.razorpay_payment_id);
      
    },
    prefill: {
      name: userData.firstname + " " + userData.lastname,
      contact: userData.mobileno,
      email: userData.emailid
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };
 const gotoRazorpay=()=>{
   return(
     
    <View style={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

    <View style={{fontSize:30,fontWeight:'bold',color:'GrayText',padding:20}}>
    <Text>Redirecting to Razorpay pls wait........</Text></View>

    <View className="sweet-loading">

  {/* <SyncLoader color={color} loading={loading} css={override} size={25} /> */}
  {openPayModal()}
</View>
</View>
   )
 }

  const openPayModal =async () => {
    RazorpayCheckout.open(options);
    setLoading(!loading)
    
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

  }, []);

//   const { classes } = props;

  return (
    <>
  
       {gotoRazorpay()}

    </>
  );
};

export default withStyles(styles)(PaymentGateway);
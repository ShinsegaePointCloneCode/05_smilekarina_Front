'use client'

import { CertFormDataType } from "@/types/userDataType";




const formatPhoneNumber = (number: string) => {
  return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

export const handleOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  certData: CertFormDataType,
  setCertData: React.Dispatch<React.SetStateAction<CertFormDataType>>
) => {
  const { name, value } = e.target;
  setCertData({
    ...certData,
    [name]: value
  });
}

export const handleLocalStorage = (name: String, phone: String) => {
  phone = formatPhoneNumber(phone.toString())
  localStorage.setItem('tempName', name.toString())
  localStorage.setItem('tempPhone', phone.toString())
}

export const checkId = async (name: String, phone: String) => {
  try {
    phone = formatPhoneNumber(phone?.toString() || "");

    const response = await fetch(`https://smilekarina.duckdns.org/api/v1/member/findIdPw?userName=${name}&phone=${phone}`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    if (data.success) {
      return data.result
    } else {
      console.log("a")
      return undefined;
    }
  } catch (error) {
    console.error("Error sending request:", error);

  }
  return undefined;
}

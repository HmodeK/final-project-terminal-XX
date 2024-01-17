interface addressRequest {
    data: {
        input: {
            firstname: string,
            lastname: string,
            postcode: string,
            telephone: string,
            default_billing: boolean,
            city: string,
            country_id: string,
            street: string[]
        }
    }
}

const setAddressRequest = (firstName: string, lastName: string) => {
    return {
        data: {
            input: {
                "firstname": firstName,
                "lastname": lastName,
                "postcode": "169400",
                "telephone": "0545577813",
                "default_billing": false,
                "default_shipping": false,
                "city": "ריינה",
                "country_id": "IL",
                "street": ["אל-יקין", "3", ""]
            }
        }
    }
}

export {
    addressRequest, setAddressRequest
}
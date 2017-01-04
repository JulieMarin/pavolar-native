import {
  ONE_WAY_ACTIVE,
  ROUND_TRIP_ACTIVE
} from '../../../actions/types';

const testParams = {
  "success": true,
  "session": {
    "id": "7D2C4410-74BF-4140-8E97-4D10555D93E2"
  },
  "response": {
    "success": true,
    "currency": {
      "code": "USD"
    },
    "results": {
      "baggage": [
        {
          "itemNumberDetails": [
            {
              "number": 1
            }
          ],
          "freeBagAllownceInfo": {
            "baggageDetails": {
              "freeAllowance": 1,
              "quantityCode": "N",
              "unitQualifier": null
            }
          }
        },
        {
          "itemNumberDetails": [
            {
              "number": 2
            }
          ],
          "freeBagAllownceInfo": {
            "baggageDetails": {
              "freeAllowance": 2,
              "quantityCode": "N",
              "unitQualifier": null
            }
          }
        }
      ],
      "codeshare": [
        {
          "refNumber": 183,
          "companyText": "AVIANCA"
        },
        {
          "refNumber": 171,
          "companyText": "TACA INTERNATIONAL AIRLINES - TACA"
        },
        {
          "refNumber": 158,
          "companyText": "AEROLITORAL DBA AEROMEXICO CONNECT"
        },
        {
          "refNumber": 187,
          "companyText": "LINEAS AEREAS COSTARRICENSES-LACSA"
        }
      ],
      "recommendations": [
        {
          "itemNumber": "1",
          "combinations": [
            {
              "baggageID": 1,
              "flightChoices": [
                {
                  "segment": 1,
                  "recommendationNumber": 1,
                  "flightDetails": [
                    {
                      "identifier": "eyJzbGljZUFuZERpY2UiOltdfQ==",
                      "dateTime": {
                        "departureDate": "200817",
                        "departureTime": "0110",
                        "arrivalDate": "200817",
                        "arrivalTime": "0558",
                        "dateVariation": 0
                      },
                      "codeShare": {
                        "number": 183,
                        "airline": null,
                        "type": "S"
                      },
                      "location": [
                        {
                          "locationId": "JFK",
                          "terminal": "4"
                        },
                        {
                          "locationId": "BOG",
                          "terminal": "1"
                        }
                      ],
                      "carrier": {
                        "marketingCarrier": "AV"
                      },
                      "flightNumber": "245",
                      "aircraft": {
                        "type": "330"
                      },
                      "electronicTicketing": true,
                      "flightCharacteristic": {
                        "code": null
                      }
                    },
                    {
                      "identifier": "eyJzbGljZUFuZERpY2UiOltdfQ==",
                      "dateTime": {
                        "departureDate": "200817",
                        "departureTime": "1157",
                        "arrivalDate": "200817",
                        "arrivalTime": "1358",
                        "dateVariation": 0
                      },
                      "codeShare": {
                        "number": 171,
                        "airline": null,
                        "type": "S"
                      },
                      "location": [
                        {
                          "locationId": "BOG",
                          "terminal": "1"
                        },
                        {
                          "locationId": "SAL"
                        }
                      ],
                      "carrier": {
                        "marketingCarrier": "AV"
                      },
                      "flightNumber": "362",
                      "aircraft": {
                        "type": "320"
                      },
                      "electronicTicketing": true,
                      "flightCharacteristic": {
                        "code": null
                      }
                    }
                  ]
                },
                {
                  "segment": 2,
                  "recommendationNumber": 1,
                  "flightDetails": [
                    {
                      "identifier": "eyJzbGljZUFuZERpY2UiOltdfQ==",
                      "dateTime": {
                        "departureDate": "300817",
                        "departureTime": "1945",
                        "arrivalDate": "310817",
                        "arrivalTime": "0220",
                        "dateVariation": 1
                      },
                      "codeShare": {
                        "number": 187,
                        "airline": null,
                        "type": "S"
                      },
                      "location": [
                        {
                          "locationId": "SAL"
                        },
                        {
                          "locationId": "JFK",
                          "terminal": "4"
                        }
                      ],
                      "carrier": {
                        "marketingCarrier": "AV"
                      },
                      "flightNumber": "670",
                      "aircraft": {
                        "type": "320"
                      },
                      "electronicTicketing": true,
                      "flightCharacteristic": {
                        "code": null
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "pricing": {
            "totalBase": 486,
            "totalTax": 99.69,
            "total": 585.69,
            "fares": [
              {
                "paxFareNum": "1",
                "fareInfo": [
                  {
                    "displayToUser": true,
                    "description": "TICKETS ARE NON-REFUNDABLE",
                    "language": null
                  }
                ],
                "codeShareDetails": [],
                "fareDetails": [
                  {
                    "segmentRef": 1,
                    "groupOfFares": [
                      {
                        "bookingClass": "W",
                        "cabin": "M",
                        "availabilityStatus": "9",
                        "passengerType": "ADT",
                        "internal": {
                          "fareType": [
                            "RP"
                          ]
                        }
                      },
                      {
                        "bookingClass": "W",
                        "cabin": "M",
                        "availabilityStatus": "9",
                        "passengerType": "ADT",
                        "internal": {
                          "fareType": [
                            "RP"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "segmentRef": 2,
                    "groupOfFares": [
                      {
                        "bookingClass": "W",
                        "cabin": "M",
                        "availabilityStatus": "9",
                        "passengerType": "ADT",
                        "internal": {
                          "fareType": [
                            "RP"
                          ]
                        }
                      }
                    ]
                  }
                ],
                "paxReference": [
                  {
                    "type": [
                      "ADT"
                    ],
                    "traveller": [
                      {
                        "ref": 1,
                        "isInfant": false
                      }
                    ]
                  }
                ]
              }
            ],
            "internal": {
              "calculator": 1,
              "fm": 0
            }
          }
        },
        {
          "itemNumber": "2",
          "combinations": [
            {
              "baggageID": 2,
              "flightChoices": [
                {
                  "segment": 1,
                  "recommendationNumber": 2,
                  "flightDetails": [
                    {
                      "identifier": "eyJzbGljZUFuZERpY2UiOltdfQ==",
                      "dateTime": {
                        "departureDate": "200817",
                        "departureTime": "0045",
                        "arrivalDate": "200817",
                        "arrivalTime": "0436",
                        "dateVariation": 0
                      },
                      "codeShare": {
                        "number": null,
                        "airline": null,
                        "type": null
                      },
                      "location": [
                        {
                          "locationId": "JFK",
                          "terminal": "1"
                        },
                        {
                          "locationId": "MEX",
                          "terminal": "2"
                        }
                      ],
                      "carrier": {
                        "marketingCarrier": "AM",
                        "operatingCarrier": "AM"
                      },
                      "flightNumber": "401",
                      "aircraft": {
                        "type": "7S8"
                      },
                      "electronicTicketing": true,
                      "flightCharacteristic": {
                        "code": null
                      }
                    },
                    {
                      "identifier": "eyJzbGljZUFuZERpY2UiOltdfQ==",
                      "dateTime": {
                        "departureDate": "200817",
                        "departureTime": "1033",
                        "arrivalDate": "200817",
                        "arrivalTime": "1148",
                        "dateVariation": 0
                      },
                      "codeShare": {
                        "number": 158,
                        "airline": null,
                        "type": "S"
                      },
                      "location": [
                        {
                          "locationId": "MEX",
                          "terminal": "2"
                        },
                        {
                          "locationId": "SAL"
                        }
                      ],
                      "carrier": {
                        "marketingCarrier": "AM"
                      },
                      "flightNumber": "628",
                      "aircraft": {
                        "type": "E90"
                      },
                      "electronicTicketing": true,
                      "flightCharacteristic": {
                        "code": null
                      }
                    }
                  ]
                },
                {
                  "segment": 2,
                  "recommendationNumber": 2,
                  "flightDetails": [
                    {
                      "identifier": "eyJzbGljZUFuZERpY2UiOltdfQ==",
                      "dateTime": {
                        "departureDate": "300817",
                        "departureTime": "1248",
                        "arrivalDate": "300817",
                        "arrivalTime": "1626",
                        "dateVariation": 0
                      },
                      "codeShare": {
                        "number": 158,
                        "airline": null,
                        "type": "S"
                      },
                      "location": [
                        {
                          "locationId": "SAL"
                        },
                        {
                          "locationId": "MEX",
                          "terminal": "2"
                        }
                      ],
                      "carrier": {
                        "marketingCarrier": "AM"
                      },
                      "flightNumber": "629",
                      "aircraft": {
                        "type": "E90"
                      },
                      "electronicTicketing": true,
                      "flightCharacteristic": {
                        "code": null
                      }
                    },
                    {
                      "identifier": "eyJzbGljZUFuZERpY2UiOltdfQ==",
                      "dateTime": {
                        "departureDate": "310817",
                        "departureTime": "0645",
                        "arrivalDate": "310817",
                        "arrivalTime": "1255",
                        "dateVariation": 0
                      },
                      "codeShare": {
                        "number": null,
                        "airline": null,
                        "type": null
                      },
                      "location": [
                        {
                          "locationId": "MEX",
                          "terminal": "2"
                        },
                        {
                          "locationId": "JFK",
                          "terminal": "1"
                        }
                      ],
                      "carrier": {
                        "marketingCarrier": "AM",
                        "operatingCarrier": "AM"
                      },
                      "flightNumber": "408",
                      "aircraft": {
                        "type": "789"
                      },
                      "electronicTicketing": true,
                      "flightCharacteristic": {
                        "code": null
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "pricing": {
            "totalBase": 486,
            "totalTax": 101.13,
            "total": 587.13,
            "fares": [
              {
                "paxFareNum": "1",
                "fareInfo": [
                  {
                    "displayToUser": true,
                    "description": "TICKETS ARE NON-REFUNDABLE",
                    "language": null
                  }
                ],
                "codeShareDetails": [],
                "fareDetails": [
                  {
                    "segmentRef": 1,
                    "groupOfFares": [
                      {
                        "bookingClass": "E",
                        "cabin": "M",
                        "availabilityStatus": "7",
                        "passengerType": "ADT",
                        "internal": {
                          "fareType": [
                            "RP"
                          ]
                        }
                      },
                      {
                        "bookingClass": "E",
                        "cabin": "M",
                        "availabilityStatus": "7",
                        "passengerType": "ADT",
                        "internal": {
                          "fareType": [
                            "RP"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "segmentRef": 2,
                    "groupOfFares": [
                      {
                        "bookingClass": "E",
                        "cabin": "M",
                        "availabilityStatus": "7",
                        "passengerType": "ADT",
                        "internal": {
                          "fareType": [
                            "RP"
                          ]
                        }
                      },
                      {
                        "bookingClass": "E",
                        "cabin": "M",
                        "availabilityStatus": "7",
                        "passengerType": "ADT",
                        "internal": {
                          "fareType": [
                            "RP"
                          ]
                        }
                      }
                    ]
                  }
                ],
                "paxReference": [
                  {
                    "type": [
                      "ADT"
                    ],
                    "traveller": [
                      {
                        "ref": 1,
                        "isInfant": false
                      }
                    ]
                  }
                ]
              }
            ],
            "internal": {
              "calculator": 1,
              "fm": 0
            }
          }
        }
      ]
    }
  }
}

const INITIAL_STATE = {
  params: testParams
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONE_WAY_ACTIVE:
      return {
        ...state,
        params: action.payload
      }
    case ROUND_TRIP_ACTIVE:
      return {
        ...state,
        params: action.payload
      }
    default:
      return state;
  }
};

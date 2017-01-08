export const dummyData = [
    {
      itemNumber: '1',
      combinations: [
        {
          baggageID: 1,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 1,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0045',
                    arrivalDate: '010217',
                    arrivalTime: '0525',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '1'
                    },
                    {
                      locationId: 'MEX',
                      terminal: '2'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AM',
                    operatingCarrier: 'AM'
                  },
                  flightNumber: '401',
                  aircraft: {
                    type: '7S8'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1035',
                    arrivalDate: '010217',
                    arrivalTime: '1248',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 155,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'MEX',
                      terminal: '2'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AM'
                  },
                  flightNumber: '628',
                  aircraft: {
                    type: 'E90'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 1,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1348',
                    arrivalDate: '150217',
                    arrivalTime: '1620',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 155,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'MEX',
                      terminal: '2'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AM'
                  },
                  flightNumber: '629',
                  aircraft: {
                    type: 'E90'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '160217',
                    departureTime: '0149',
                    arrivalDate: '160217',
                    arrivalTime: '0720',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MEX',
                      terminal: '2'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '1'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AM',
                    operatingCarrier: 'AM'
                  },
                  flightNumber: '400',
                  aircraft: {
                    type: '788'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 260,
        totalTax: 101.13,
        total: 361.13,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '2',
      combinations: [
        {
          baggageID: 1,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 2,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1425',
                    arrivalDate: '010217',
                    arrivalTime: '2001',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    },
                    {
                      locationId: 'PTY'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '831',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '2122',
                    arrivalDate: '010217',
                    arrivalTime: '2224',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'PTY'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '870',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 2,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1415',
                    arrivalDate: '150217',
                    arrivalTime: '1717',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'PTY'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '411',
                  aircraft: {
                    type: '73G'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1818',
                    arrivalDate: '150217',
                    arrivalTime: '2335',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'PTY'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '804',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 260,
        totalTax: 102.19,
        total: 362.19,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '6',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '6',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '3',
      combinations: [
        {
          baggageID: 1,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 2,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1425',
                    arrivalDate: '010217',
                    arrivalTime: '2001',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    },
                    {
                      locationId: 'PTY'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '831',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '2122',
                    arrivalDate: '010217',
                    arrivalTime: '2224',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'PTY'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '870',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 3,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1415',
                    arrivalDate: '150217',
                    arrivalTime: '1717',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'PTY'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '411',
                  aircraft: {
                    type: '73G'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2119',
                    arrivalDate: '160217',
                    arrivalTime: '0230',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'PTY'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'CM',
                    operatingCarrier: 'CM'
                  },
                  flightNumber: '808',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 260,
        totalTax: 102.19,
        total: 362.19,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '6',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '6',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '6',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '6',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '4',
      combinations: [
        {
          baggageID: 2,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 3,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0659',
                    arrivalDate: '010217',
                    arrivalTime: '1021',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '2230',
                  aircraft: {
                    type: '757'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1120',
                    arrivalDate: '010217',
                    arrivalTime: '1315',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '925',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 4,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1540',
                    arrivalDate: '150217',
                    arrivalTime: '1923',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1128',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2156',
                    arrivalDate: '160217',
                    arrivalTime: '0051',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1406',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        },
        {
          baggageID: 2,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 4,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0530',
                    arrivalDate: '010217',
                    arrivalTime: '0845',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '947',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1120',
                    arrivalDate: '010217',
                    arrivalTime: '1315',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '925',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 4,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1540',
                    arrivalDate: '150217',
                    arrivalTime: '1923',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1128',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2156',
                    arrivalDate: '160217',
                    arrivalTime: '0051',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1406',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        },
        {
          baggageID: 2,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 5,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0659',
                    arrivalDate: '010217',
                    arrivalTime: '1021',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '2230',
                  aircraft: {
                    type: '757'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1256',
                    arrivalDate: '010217',
                    arrivalTime: '1448',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1047',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 4,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1540',
                    arrivalDate: '150217',
                    arrivalTime: '1923',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1128',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2156',
                    arrivalDate: '160217',
                    arrivalTime: '0051',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1406',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        },
        {
          baggageID: 2,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 3,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0659',
                    arrivalDate: '010217',
                    arrivalTime: '1021',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '2230',
                  aircraft: {
                    type: '757'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1120',
                    arrivalDate: '010217',
                    arrivalTime: '1315',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '925',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 5,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1405',
                    arrivalDate: '150217',
                    arrivalTime: '1745',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1520',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2156',
                    arrivalDate: '160217',
                    arrivalTime: '0051',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1406',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        },
        {
          baggageID: 2,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 6,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0530',
                    arrivalDate: '010217',
                    arrivalTime: '0845',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '947',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1256',
                    arrivalDate: '010217',
                    arrivalTime: '1448',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1047',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 4,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1540',
                    arrivalDate: '150217',
                    arrivalTime: '1923',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1128',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2156',
                    arrivalDate: '160217',
                    arrivalTime: '0051',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1406',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 260,
        totalTax: 114.29,
        total: 374.29,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              },
              {
                displayToUser: true,
                description: 'FARE VALID FOR E TICKET ONLY',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  },
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  },
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '5',
      combinations: [
        {
          baggageID: 2,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 7,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0630',
                    arrivalDate: '010217',
                    arrivalTime: '1150',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '148',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1256',
                    arrivalDate: '010217',
                    arrivalTime: '1448',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1047',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 4,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1540',
                    arrivalDate: '150217',
                    arrivalTime: '1923',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'MIA'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1128',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2156',
                    arrivalDate: '160217',
                    arrivalTime: '0051',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'MIA'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '8'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AA',
                    operatingCarrier: 'AA'
                  },
                  flightNumber: '1406',
                  aircraft: {
                    type: '738'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 260,
        totalTax: 114.29,
        total: 374.29,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              },
              {
                displayToUser: true,
                description: 'FARE VALID FOR E TICKET ONLY',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '2',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  },
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '2',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  },
                  {
                    bookingClass: 'O',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP',
                        'ET'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '6',
      combinations: [
        {
          baggageID: 2,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 8,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1925',
                    arrivalDate: '010217',
                    arrivalTime: '2212',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    },
                    {
                      locationId: 'ATL',
                      terminal: 'S'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'DL',
                    operatingCarrier: 'DL'
                  },
                  flightNumber: '496',
                  aircraft: {
                    type: 'M88'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '020217',
                    departureTime: '0955',
                    arrivalDate: '020217',
                    arrivalTime: '1252',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'ATL',
                      terminal: 'I'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'DL',
                    operatingCarrier: 'DL'
                  },
                  flightNumber: '872',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 6,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1352',
                    arrivalDate: '150217',
                    arrivalTime: '1825',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'ATL',
                      terminal: 'I'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'DL',
                    operatingCarrier: 'DL'
                  },
                  flightNumber: '374',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '2105',
                    arrivalDate: '150217',
                    arrivalTime: '2323',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'ATL',
                      terminal: 'S'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'DL',
                    operatingCarrier: 'DL'
                  },
                  flightNumber: '984',
                  aircraft: {
                    type: '319'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 260,
        totalTax: 114.29,
        total: 374.29,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'V',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '7',
      combinations: [
        {
          baggageID: 3,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 9,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0340',
                    arrivalDate: '010217',
                    arrivalTime: '0740',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 184,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '671',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 7,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1945',
                    arrivalDate: '160217',
                    arrivalTime: '0120',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: 184,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '670',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        },
        {
          baggageID: 3,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 10,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0920',
                    arrivalDate: '010217',
                    arrivalTime: '1335',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 168,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '571',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 7,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1945',
                    arrivalDate: '160217',
                    arrivalTime: '0120',
                    dateVariation: 1
                  },
                  codeShare: {
                    number: 184,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '670',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 396,
        totalTax: 99.69,
        total: 495.69,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'W',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'T',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '8',
      combinations: [
        {
          baggageID: 3,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 9,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0340',
                    arrivalDate: '010217',
                    arrivalTime: '0740',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 184,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '671',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 8,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1515',
                    arrivalDate: '150217',
                    arrivalTime: '2100',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 168,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '570',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 492,
        totalTax: 99.69,
        total: 591.69,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'W',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'W',
                    cabin: 'M',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    },
    {
      itemNumber: '9',
      combinations: [
        {
          baggageID: 1,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 11,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '1925',
                    arrivalDate: '010217',
                    arrivalTime: '2248',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '5'
                    },
                    {
                      locationId: 'LAX',
                      terminal: '3'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'B6',
                    operatingCarrier: 'B6'
                  },
                  flightNumber: '1123',
                  aircraft: {
                    type: '32S'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '020217',
                    departureTime: '0030',
                    arrivalDate: '020217',
                    arrivalTime: '0725',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 168,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'LAX',
                      terminal: '2'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '521',
                  aircraft: {
                    type: '321'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 9,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '0745',
                    arrivalDate: '150217',
                    arrivalTime: '1107',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 168,
                    airline: null,
                    type: 'S'
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'LAX',
                      terminal: '2'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'AV'
                  },
                  flightNumber: '522',
                  aircraft: {
                    type: '321'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                },
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1320',
                    arrivalDate: '150217',
                    arrivalTime: '2137',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: null,
                    airline: null,
                    type: null
                  },
                  location: [
                    {
                      locationId: 'LAX',
                      terminal: '3'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '5'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'B6',
                    operatingCarrier: 'B6'
                  },
                  flightNumber: '424',
                  aircraft: {
                    type: '32S'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 1299,
        totalTax: 114.29,
        total: 1413.29,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'P',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'D',
                    cabin: 'C',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'D',
                    cabin: 'C',
                    availabilityStatus: '9',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  },
                  {
                    bookingClass: 'P',
                    cabin: 'M',
                    availabilityStatus: '7',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 2
        }
      }
    },
    {
      itemNumber: '10',
      combinations: [
        {
          baggageID: 3,
          flightChoices: [
            {
              segment: 1,
              recommendationNumber: 12,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '010217',
                    departureTime: '0920',
                    arrivalDate: '010217',
                    arrivalTime: '1335',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 168,
                    airline: null,
                    type: 'L'
                  },
                  location: [
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    },
                    {
                      locationId: 'SAL'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'UA'
                  },
                  flightNumber: '6632',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            },
            {
              segment: 2,
              recommendationNumber: 10,
              flightDetails: [
                {
                  identifier: 'eyJzbGljZUFuZERpY2UiOltdfQ==',
                  dateTime: {
                    departureDate: '150217',
                    departureTime: '1515',
                    arrivalDate: '150217',
                    arrivalTime: '2100',
                    dateVariation: 0
                  },
                  codeShare: {
                    number: 168,
                    airline: null,
                    type: 'L'
                  },
                  location: [
                    {
                      locationId: 'SAL'
                    },
                    {
                      locationId: 'JFK',
                      terminal: '4'
                    }
                  ],
                  carrier: {
                    marketingCarrier: 'UA'
                  },
                  flightNumber: '6642',
                  aircraft: {
                    type: '320'
                  },
                  electronicTicketing: true,
                  flightCharacteristic: {
                    code: null
                  }
                }
              ]
            }
          ]
        }
      ],
      pricing: {
        totalBase: 1958,
        totalTax: 99.69,
        total: 2057.69,
        fares: [
          {
            paxFareNum: '1',
            fareInfo: [
              {
                displayToUser: true,
                description: 'TICKETS ARE NON-REFUNDABLE',
                language: null
              }
            ],
            codeShareDetails: [],
            fareDetails: [
              {
                segmentRef: 1,
                groupOfFares: [
                  {
                    bookingClass: 'B',
                    cabin: 'M',
                    availabilityStatus: '4',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              },
              {
                segmentRef: 2,
                groupOfFares: [
                  {
                    bookingClass: 'B',
                    cabin: 'M',
                    availabilityStatus: '4',
                    passengerType: 'ADT',
                    internal: {
                      fareType: [
                        'RP'
                      ]
                    }
                  }
                ]
              }
            ],
            paxReference: [
              {
                type: [
                  'ADT'
                ],
                traveller: [
                  {
                    ref: 1,
                    isInfant: false
                  }
                ]
              }
            ]
          }
        ],
        internal: {
          calculator: 1,
          fm: 0
        }
      }
    }
  ]

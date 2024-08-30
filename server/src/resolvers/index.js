const resolvers = {
  Query: {
    locations: () => {
      return {
        id: "1",
        name: "name",
        description: "test",
        photo: "no",
      }
    },
  },
  Mutation: {
    addAppointment: (_parent, { name, appointmentTime, phone, tableSize }) => {
      return {
        id: "String",
        name: name,
        phone: phone,
        appointmentTime: appointmentTime,
        tableSize: tableSize,
        status: "success",
      }
    },
  },
}

export default resolvers

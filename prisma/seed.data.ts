import { PrismaClient } from "@prisma/client";
import { InventoryItemEnum } from "../enums/data/inventoryItem.enum";
const prismaClient = new PrismaClient

const seed = async () => {
  // Apartment Part
  await prismaClient.apartment.upsert({
    where: {
      id: "cllfimaa8000108l1836d1hcd",
    },
    update: {},
    create: {
      id: "cllfimaa8000108l1836d1hcd",
      address: "123 Main Street",
      floor: "2nd Floor",
      doorNumber: "A",
      photo: "https://media.istockphoto.com/id/1393111519/sv/foto/new-modern-detached-brick-home.jpg?s=2048x2048&w=is&k=20&c=AfHV9hW9KRWDybVqlVGz39SOns7O8sxkgHq2BATiHAg="
    },
  });

  await prismaClient.apartment.upsert({
    where: {
      id: "cllfjp2vs000008joftmjhs47",
    },
    update: {},
    create: {
      id: "cllfjp2vs000008joftmjhs47",
      address: "456 Elm Avenue",
      floor: "1st Floor",
      doorNumber: "B",
      photo: "https://media.istockphoto.com/id/1409196606/sv/foto/cozy-patio-with-sitting-area.jpg?s=2048x2048&w=is&k=20&c=hVJatsj4nvWycKQqsiDUubiX9ROwGHjfhBJ1r4l9B88="
    },
  });

  await prismaClient.apartment.upsert({
    where: {
      id: "cllfjpnni000108jocump71n0",
    },
    update: {},
    create: {
      id: "cllfjpnni000108jocump71n0",
      address: "789 Oak Lane",
      floor: "3rd Floor",
      doorNumber: "C",
      photo: "https://media.istockphoto.com/id/1149071433/sv/foto/nya-radhus-till-salu-i-bostads-utveckling.jpg?s=2048x2048&w=is&k=20&c=hBSqj3JnDAu49pyegtHWkMz61S2lbNC49ZiQWi3-vlY="
    },
  });

  await prismaClient.apartment.upsert({
    where: {
      id: "cllfjqh23000208jo6kvqfd9g",
    },
    update: {},
    create: {
      id: "cllfjqh23000208jo6kvqfd9g",
      address: "321 Pine Road",
      floor: "Ground Floor",
      doorNumber: "1",
      photo: "https://media.istockphoto.com/id/1468252195/sv/foto/traditional-old-gothic-buildings-at-street-of-stirling-scotland-england-uk.jpg?s=2048x2048&w=is&k=20&c=YH-6zJ9ULO0oKDq-s_jkJQydaEBacqR8fae1vgzoDog="
    },
  });

  await prismaClient.apartment.upsert({
    where: {
      id: "cllfjr70k000308jo19el32hc",
    },
    update: {},
    create: {
      id: "cllfjr70k000308jo19el32hc",
      address: "555 Cedar Court",
      floor: "4th Floor",
      doorNumber: "D",
      photo: "https://media.istockphoto.com/id/1558497801/sv/foto/historic-old-town-of-cadolzburg.jpg?s=2048x2048&w=is&k=20&c=TtvpEzr0V0iLo3mHBi0hGbaSEmBVavE57nfMIX6scJw="
    },
  });

  // Inventory Part
  await prismaClient.inventory.upsert({
    where: {
        id: "cllfkyngq000008mk80wug77u"
    },
    update: {},
    create: {
        id: "cllfkyngq000008mk80wug77u",
        apartmentId: "cllfimaa8000108l1836d1hcd"
    }
  })

  await prismaClient.inventory.upsert({
    where: {
        id: "cllfkzpce000108mkd7w36vau"
    },
    update: {},
    create: {
        id: "cllfkzpce000108mkd7w36vau",
        apartmentId: "cllfjp2vs000008joftmjhs47"
    }
  })

  // Inventory Item Part

  //First Inventory Items
  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllfl488t000208mkdzt09l01"
    },
    update: {},
    create: {
        id: "cllfl488t000208mkdzt09l01",
        inventoryId: "cllfkyngq000008mk80wug77u",
        itemId: InventoryItemEnum.Bed,
        quantity: 5
    }
  })

  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllfledm3000008ifbsxd8o8t"
    },
    update: {},
    create: {
        id: "cllfledm3000008ifbsxd8o8t",
        inventoryId: "cllfkyngq000008mk80wug77u",
        itemId: InventoryItemEnum.Refrigerator,
        quantity: 2
    }
  })

  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllflg42w000108if87dj50dm"
    },
    update: {},
    create: {
        id: "cllflg42w000108if87dj50dm",
        inventoryId: "cllfkyngq000008mk80wug77u",
        itemId: InventoryItemEnum.Television,
        quantity: 1
    }
  })

  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllflis9e000208ifa7cw8v8j"
    },
    update: {},
    create: {
        id: "cllflis9e000208ifa7cw8v8j",
        inventoryId: "cllfkyngq000008mk80wug77u",
        itemId: InventoryItemEnum.Sofa,
        quantity: 10
    }
  })

  //Second Inventory Items
  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllfll6on000308if1tq73jcg"
    },
    update: {},
    create: {
        id: "cllfll6on000308if1tq73jcg",
        inventoryId: "cllfkzpce000108mkd7w36vau",
        itemId: InventoryItemEnum.Toaster,
        quantity: 1
    }
  })

  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllfllocm000408if2gci1s7v"
    },
    update: {},
    create: {
        id: "cllfllocm000408if2gci1s7v",
        inventoryId: "cllfkzpce000108mkd7w36vau",
        itemId: InventoryItemEnum["Dining Table"],
        quantity: 3
    }
  })

  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllflnmnr000508if5x820xiy"
    },
    update: {},
    create: {
        id: "cllflnmnr000508if5x820xiy",
        inventoryId: "cllfkzpce000108mkd7w36vau",
        itemId: InventoryItemEnum["Washing Machine"],
        quantity: 4
    }
  })

  await prismaClient.inventoryItem.upsert({
    where: {
        id: "cllflp9f2000608if7s4t789m"
    },
    update: {},
    create: {
        id: "cllflp9f2000608if7s4t789m",
        inventoryId: "cllfkzpce000108mkd7w36vau",
        itemId: InventoryItemEnum.Microwave,
        quantity: 14
    }
  })
};

seed()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })
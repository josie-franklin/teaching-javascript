var friendlyFriend0 = {
  name: undefined,
  species: "pokachu",
  type: ["electric"],
  wild: true,
};

var friendlyFriend1 = {
  name: "Jeffatron",
  species: "radiscald",
  type: ["cool", "flying"],
  wild: false,
};

var friendlyFriend2 = {
  name: "gotitsall",
  species: "fulfilled",
  type: ["whole"],
  wild: true,
};

//JS runs things in ORDER. Whatever you want it to check first needs to go first. The first thing will override the lower things if there's a conflict.
function greetFriendlyFriends(friendlyFriend) {
  if (!friendlyFriend.name) {
    friendlyFriend = renameFriendlyFriend(friendlyFriend);
  }
  //^^the "!" means that it's missing
  console.log("Hello, " + friendlyFriend.name + ".");
  if (friendlyFriend.wild) {
    friendlyFriend = catchFriendlyFriend(friendlyFriend);
  }
  console.log(
    friendlyFriend.name + "'s love for you is " + !friendlyFriend.wild
  );
  if (checkNumberOfType(friendlyFriend) === 2) {
    console.log(
      friendlyFriend.name +
        " has two types: " +
        friendlyFriend.type[0] +
        " and " +
        friendlyFriend.type[1] +
        "."
    );
  } else {
    //else has to do with the "if" that it's directly under
    console.log(
      friendlyFriend.name + " has one type: " + friendlyFriend.type[0] + "."
    );
  }
}

function renameFriendlyFriend(friendlyFriend) {
  friendlyFriend.name = "Forgot to Add a Name Mcgee";
  return friendlyFriend;
  //the "return" function sends the object back to the function it was called in.
}

function catchFriendlyFriend(friendlyFriend) {
  friendlyFriend.wild = false;
  return friendlyFriend;
}

function checkNumberOfType(friendlyFriend) {
  return friendlyFriend.type.length;
  //".length" is baked into js. Use it on strings and it'll tell you the character count (including spaces!).
}

greetFriendlyFriends(friendlyFriend1);

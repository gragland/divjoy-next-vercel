import { useState, useEffect, useRef } from "react";
import firebase from "./firebase";

const firestore = firebase.firestore();

/**** USERS ****/

// Fetch user data
export function useUser(uid) {
  return useQuery(uid && firestore.collection("users").doc(uid));
}

// Update an existing user
export function updateUser(uid, data) {
  return firestore.collection("users").doc(uid).update(data);
}

// Create a new user
export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

/**** ITEMS ****/
/* Example query functions (modify to your needs) */

// Fetch all items by owner
export function useItemsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("items").where("owner", "==", owner)
  );
}

// Fetch item data
export function useItem(id) {
  return useQuery(id && firestore.collection("items").doc(id));
}

// Update an item
export function updateItem(id, data) {
  return firestore.collection("items").doc(id).update(data);
}

// Create a new item
export function createItem(data) {
  return firestore.collection("items").add(data);
}

/**** HELPERS ****/

// Custom React hook that subscribes to a Firestore query
function useQuery(query) {
  const [queryState, setQueryState] = useState({
    status: "loading",
    data: undefined,
    error: null,
  });

  // Gives us previous query object if query is the same
  // ensuring we don't unsubscribe and resubscribe below.
  const queryCached = useQueryCache(query);

  useEffect(() => {
    // Skip if falsy value, as that allows us to wait on needed
    // needed data before constructing query and passing it into useQuery.
    if (queryCached) {
      return queryCached.onSnapshot(
        (response) => {
          // Get data for collection or doc
          const data = response.docs
            ? getCollectionData(response)
            : getDocData(response);

          setQueryState({
            status: "success",
            data: data,
            error: null,
          });
        },
        (error) => {
          setQueryState((state) => ({
            status: "error",
            data: state.data,
            error: error,
          }));
        }
      );
    }
  }, [queryCached]);

  return queryState;
}

// Get doc data
function getDocData(doc) {
  return doc.exists === true ? { id: doc.id, ...doc.data() } : null;
}

// Get array of doc data from collection
function getCollectionData(collection) {
  return collection.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

function useQueryCache(query) {
  // Ref for storing previous query object
  const previousRef = useRef();
  const previous = previousRef.current;

  // Determine if query object is equal to previous
  const isEqual =
    (!previous && !query) || (previous && query && previous.isEqual(query));

  // If not equal update previous to query (for next render)
  // and then return new query below.
  useEffect(() => {
    if (!isEqual) {
      previousRef.current = query;
    }
  });

  return isEqual ? previous : query;
}

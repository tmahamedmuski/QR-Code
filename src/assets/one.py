rooms = [None] * 10

def occupy_room(room_number, guest_name):
    """Occupy a room with a guest name if it's vacant."""
    if 0 <= room_number < 10:
        if rooms[room_number] is None:
            rooms[room_number] = guest_name
            print(f"Room {room_number} is now occupied by {guest_name}.")
        else:
            print(f"Room {room_number} is already occupied by {rooms[room_number]}.")
    else:
        print("Invalid room number. Please enter a room number between 0 and 9.")

def leave_room(room_number):
    """Clear the guest name from the room when a guest leaves."""
    if 0 <= room_number < 10:
        if rooms[room_number] is not None:
            print(f"{rooms[room_number]} has left room {room_number}.")
            rooms[room_number] = None
        else:
            print(f"Room {room_number} is already vacant.")
    else:
        print("Invalid room number. Please enter a room number between 0 and 9.")

def display_vacant_rooms():
    """Display a list of all vacant rooms."""
    vacant_rooms = [i for i, guest in enumerate(rooms) if guest is None]
    if vacant_rooms:
        print("Vacant rooms:", vacant_rooms)
    else:
        print("No rooms are vacant.")

def is_room_vacant(room_number):
    """Check if a specific room is vacant."""
    if 0 <= room_number < 10:
        if rooms[room_number] is None:
            print(f"Room {room_number} is vacant.")
        else:
            print(f"Room {room_number} is occupied by {rooms[room_number]}.")
    else:
        print("Invalid room number. Please enter a room number between 0 and 9.")

def display_occupied_rooms():
    """Display numbers of occupied rooms and guest names."""
    occupied_rooms = [(i, guest) for i, guest in enumerate(rooms) if guest is not None]
    if occupied_rooms:
        print("Occupied rooms:")
        for room, guest in occupied_rooms:
            print(f"Room {room}: {guest}")
    else:
        print("No rooms are occupied.")

# Menu----->hotel system
while True:
    print("\nHotel Room Management")
    print("1. Occupy a room")
    print("2. Guest leaves a room")
    print("3. Display vacant rooms")
    print("4. Check if a room is vacant")
    print("5. Display occupied rooms")
    print("6. Exit")
    
    choice = input("Enter your choice (1-6): ")
    
    if choice == '1':
        room_number = int(input("Enter room number to occupy (0-9): "))
        guest_name = input("Enter guest name: ")
        occupy_room(room_number, guest_name)
    elif choice == '2':
        room_number = int(input("Enter room number to vacate (0-9): "))
        leave_room(room_number)
    elif choice == '3':
        display_vacant_rooms()
    elif choice == '4':
        room_number = int(input("Enter room number to check (0-9): "))
        is_room_vacant(room_number)
    elif choice == '5':
        display_occupied_rooms()
    elif choice == '6':
        print("Exiting the hotel management system.")
        break
    else:
        print("Invalid choice. Please select a number from 1 to 6.")



import socketio
import asyncio
# asyncio
sio = socketio.AsyncClient()

@sio.event
def connect():
    print("I'm connected!")

@sio.on('*')
async def catch_all(event, data):
   pass

@sio.event
async def status(a1, a2):
    print(f"Got status {a1} {a2}")
    return "OK", 123

async def main():
    await sio.connect('http://localhost:3001')
    # input("Press any key to quit")
    # await sio.disconnect()

loop = asyncio.get_event_loop()
loop.create_task(main())
loop.run_forever()
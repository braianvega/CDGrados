import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# SE DEFINE LA DIRECCION FIREBASE
cred = credentials.Certificate(
    'comunicaciondos-864b9-firebase-adminsdk-z9m3h-3b25e72a07.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://comunicaciondos-864b9-default-rtdb.firebaseio.com/'
})

arduino = serial.Serial("COM3", 9600)

while True:
    ref = db.reference('Grados')
    Datos = str(ref.child('Valor').get())
    print(Datos)
    time.sleep(2)
    arduino.write(Datos.encode('ascii'))
    
arduino.close()

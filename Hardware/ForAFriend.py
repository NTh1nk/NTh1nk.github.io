

import time

CensPins = ["P4"]
FugtVal = 99
Val = [1]
Pumcens = "P9"
def Main():
    for Cens in CensPins:
        Val[Cens] = CensPins[Cens].analog_read_pin(CensPins[Cens])
        if Val[Cens] < FugtVal:
            Pumcens.analog_write_pin(name: Pumcens, value: 1023): None
            break
    time.sleep(3600)#Ja det er antallet af secunder i en time

Main()#Kører coden
            




    
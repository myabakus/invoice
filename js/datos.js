var app = new Vue({
    el: '#app',
    data: {
        name: 'Miguel Uribe MV S.A.S',
        //    apellido: 'juan',
        parrafos: {
            actividad: 'ACTIVIDAD ECONÓMICA 7500',
            tarifa: 'TARIFA. ICA 9.66X1000',
            iva: 'IVA Regimen Común'
        },
        parrafos2: {
            nit: 'Nit. 900643855-4',
            numero: '3212900914',
            dir: 'Kr 79 No. 127C - 45 IN 2 AP 101',
            city: 'Bogotá',
            country: 'Colombia'

        },
        name2: 'IKE ASISTENCIA COLOMBIA',

        parrafos3: {
            nit: 'NIT. 900106251-3',
            dir: 'Cll 93B 17 - 25 Piso 6',
            local: 'Edif. Centro Internacional de Negocios',
            city: 'Bogotá',
            country: 'Colombia'
        },
        parrafos4: {
            factura: 'Factura de Venta',
            numero: 'Número: ',
            numDato: '1607',
            fecha: 'Fecha: ',
            fechaDato: '17/02/2017',
            vencimiento: 'Vencimiento: ',
            venDato: '19/03/2017',
            referencia: 'Referencia: ',
            refDato: 'Banco Popular',
        },
        thead: {
            description: 'Descripción: ',
            count: 'Cant: ',
            price: 'Precio: ',
            total: 'Total: '
        },
        tbody: {
            tbodyr1: {
                titulo: 'Consulta médica veterinaria presencial',
                description: 'Consulta médica veterinaria presencial',
                count: '4',
                price: '15.000',
                total: '60.000,0'
            },
            tbodyr2: {
                titulo: 'Hablar para consultas médicas veterinarias',
                description: 'Tener una reunión con el Dr para ver a la mascota',
                count: '2',
                price: '85.000',
                total: '170.000,0'
            },
            tbodyr3: {
                titulo: 'Acupuntura Veterinaria',
                description: 'dejar a tu mascota como nueva',
                count: '1',
                price: '100.000',
                total: '100.000,0'
            },
            tbodyr4: {
                titulo: 'Anestesia de Pequeños Animales',
                description: 'Dormir al animal',
                count: '1',
                price: '50.000',
                total: '50.000,0'
            },
            tbodyr5: {
                titulo: 'Limpieza dental',
                description: 'Limpiar dientes del animal',
                count: '1',
                price: '100.000',
                total: '100.000,0'
            },
            tbodyr6: {
                titulo: 'Chequeo del corazón',
                description: 'Cualquier tipo de cirugía',
                count: '1',
                price: '150.000',
                total: '150.000,0'
            },
            tbodyr7: {
                titulo: 'Cirugía Veterinaria de Animales Pequeños',
                description: 'Cirugía en tejidos blandos',
                count: '1',
                price: '200.000',
                total: '200.000,0'
            },
            tbodyr8: {
                titulo: 'MultiCiruguia',
                description: 'Cualquier tipo de cirugía',
                count: '1',
                price: '100.000',
                total: '100.000,0'
            }
        }

    }
});
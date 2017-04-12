var app = new Vue({
    el: '#app',
    data: {
        company: {
            name: 'Miguel Uribe MV S.A.S',
            activity: {
                name: 'ACTIVIDAD ECONÓMICA 7500',
                ica: 'TARIFA. ICA 9.66X1000',
                regime: 'IVA Regimen Común'
            },
            info: {
                nit: 'Nit. 900643855-4',
                phone: '3212900914',
                address: 'Kr 79 No. 127C - 45 IN 2 AP 101',
                city: 'Bogotá',
                country: 'Colombia'
            }
        },
        customerInfo: {
            name: 'IKE ASISTENCIA COLOMBIA',
            customer: {
                nit: 'NIT. 900106251-3',
                dir: 'Cll 93B 17 - 25 Piso 6',
                local: 'Edif. Centro Internacional de Negocios',
                city: 'Bogotá',
                country: 'Colombia'
            }
        },
        invoiceInfo: {
            name: 'Factura de Venta',
            invoice: {
                numero: 'Número: ',
                numDato: '1607',
                fecha: 'Fecha: ',
                fechaDato: '17/02/2017',
                vencimiento: 'Vencimiento: ',
                venDato: '19/03/2017',
                referencia: 'Referencia: ',
                refDato: 'Banco Popular',
            }

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
        },
        invoiceNotes: {
            title: 'Nota',
            note: 'Nos acogemos a los beneficios establecidos en la Ley 1429 de 2010. Favor no aplicar Retención en la Fuente. CONSIGNAR EN BANCOLOMBIA CUENTA DE AHORROS No. 20611685999 A NOMBRE DE MIGUEL URIBE MV S.A.S'
        },
        invoiceTotal: {
            head: {
                headSubtotal: 'Subtotal',
                headIva: '+IVA 16%',
                headTotal: 'Total',
                headRete: '-Rete IVA 15%',
                headRetefuente: '-Retefuente 3.5%',
                headSaldo: 'Saldo'
            },
            headData: {
                dataSubtotal: '930.000',
                dataIva: '148,800',
                dataTotal: '1,078,800',
                dataRete: '22,320',
                dataRetefuente: '32,550',
                dataSaldo: '1,023,930'
            }
        },
        totalFirmas: {
            firma1: {
                lineaA: '____________________________________________',
                pFirma: 'Elaborado por'
            },
            firma2: {
                lineaA: '____________________________________________',
                pFirma: 'Aceptado, Firma y/o Sello'
            }
        },
        footer: 'RESOLUCION DIAN 320001302741 DEL 19 DE AGOSTO DE 2015. NUMERACIÓN AUTORIZADA POR COMPUTADOR 507 - 2000'


    }
});
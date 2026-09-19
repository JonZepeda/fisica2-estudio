// Data oficial de los 75 ejercicios de Física II (Semanas 7 a 11)
window.PROBLEMS_DATA = [
  // ==================== SEMANA 7 ====================
  {
    id: "s7_1", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Análisis y Lógica", numero: 1,
    pregunta: "Si el potencial eléctrico es constante en una región del espacio, ¿qué se puede afirmar sobre el campo eléctrico en esa misma región? Explique.",
    formula: "\\vec{E} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)",
    desarrollo: "El campo eléctrico es el gradiente negativo del potencial eléctrico. Si el potencial eléctrico es constante en toda una región del espacio, sus derivadas espaciales respecto a todas las coordenadas son exactamente cero. En consecuencia, el campo eléctrico neto en toda esa región es idénticamente nulo.",
    resultado: "$\\vec{E} = 0\\text{ N/C}$ (El campo eléctrico es exactamente cero)"
  },
  {
    id: "s7_2", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Análisis y Lógica", numero: 2,
    pregunta: "Dos cargas puntuales de igual magnitud pero signos opuestos están separadas por una distancia $d$. ¿Existe algún punto en la línea que las une donde el potencial sea cero pero el campo eléctrico no lo sea? Justifique.",
    formula: "V = k_e \\left(\\frac{+q}{d/2} + \\frac{-q}{d/2}\\right) = 0\\text{ V}, \\quad E_{\\text{neto}} = k_e \\frac{q}{(d/2)^2} + k_e \\frac{q}{(d/2)^2} = \\frac{8k_e q}{d^2} \\neq 0",
    desarrollo: "Sí, exactamente en el <strong>punto medio</strong> entre ambas cargas (a distancia $d/2$ de cada una).<br>&bull; <strong>Potencial (escalar)</strong>: Las contribuciones de ambas cargas se cancelan algebraicamente: $V = k_e \\frac{q}{d/2} - k_e \\frac{q}{d/2} = 0\\text{ V}$.<br>&bull; <strong>Campo Eléctrico (vectorial)</strong>: El campo de $+q$ apunta alejándose de ella (hacia $-q$) y el de $-q$ atrae en ese mismo sentido; ambos vectores se suman reforzándose: $E = \\frac{8k_e q}{d^2} \\neq 0$.",
    resultado: "Sí, en el punto medio exacto ($V = 0\\text{ V}$, $E \\neq 0\\text{ N/C}$)"
  },
  {
    id: "s7_3", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Análisis y Lógica", numero: 3,
    pregunta: "Al moverse en la dirección de las líneas de campo eléctrico, ¿el potencial eléctrico aumenta, disminuye o se mantiene igual?",
    formula: "\\Delta V = V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{s}",
    desarrollo: "<strong>Disminuye</strong>. Por definición matemática, la diferencia de potencial es el negativo de la integral de línea del campo. Al desplazarse en el mismo sentido que las líneas de $\\vec{E}$ (donde $\\vec{E} \\cdot d\\vec{s} > 0$), se obtiene $\\Delta V < 0$, lo que implica $V_{\\text{final}} < V_{\\text{inicial}}$. Las líneas de campo siempre apuntan hacia donde el potencial decrece.",
    resultado: "Disminuye ($\\Delta V < 0$)"
  },
  {
    id: "s7_4", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Análisis y Lógica", numero: 4,
    pregunta: "Explique por qué la superficie de un conductor cargado en equilibrio electrostático es siempre una superficie equipotencial.",
    formula: "\\Delta V = -\\int_A^B E_t ds = 0 \\implies V_A = V_B",
    desarrollo: "En condiciones de equilibrio electrostático, las cargas libres ya no se mueven. Si existiera una componente del campo tangencial a la superficie ($E_t \\neq 0$), los electrones libres sobre la superficie experimentarían una fuerza eléctrica $F_t = -e E_t$ y se acelerarían, violando el equilibrio. Por tanto, necesariamente $E_t = 0$ en toda la superficie y el campo exterior es perpendicular. La integral de línea entre dos puntos cualesquiera sobre la superficie es nula, garantizando que toda la superficie tiene el mismo potencial.",
    resultado: "Porque el campo tangencial es nulo ($E_t = 0$); toda la superficie está al mismo potencial"
  },
  {
    id: "s7_5", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Análisis y Lógica", numero: 5,
    pregunta: "Si una distribución de carga continua tiene simetría esférica, ¿cómo varía el potencial eléctrico fuera de la distribución en comparación con una carga puntual?",
    formula: "V(r) = -\\int_\\infty^r E(r') dr' = k_e \\frac{Q}{r}",
    desarrollo: "Varía de manera <strong>exactamente idéntica</strong>. Por la Ley de Gauss, el campo eléctrico exterior a cualquier distribución con simetría esférica de carga total $Q$ es $E(r) = k_e \\frac{Q}{r^2}$. Al integrar respecto a la referencia en el infinito ($V_\\infty = 0$), el potencial en cualquier punto $r \\ge R$ es $V(r) = k_e \\frac{Q}{r}$, igual que si toda la carga estuviese concentrada en el centro como carga puntual.",
    resultado: "Varía idénticamente al de una carga puntual ($V = k_e Q / r$)"
  },
  {
    id: "s7_6", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Desarrollo Matemático", numero: 6,
    pregunta: "Datos: Dos cargas puntuales $q_1 = +3.0\\ \\mu\\text{C}$ en $(0, 3)\\text{ m}$ y $q_2 = -4.0\\ \\mu\\text{C}$ en $(4, 0)\\text{ m}$. Calcule el potencial eléctrico total en el origen $(0,0)$.",
    formula: "V = k_e \\left( \\frac{q_1}{r_1} + \\frac{q_2}{r_2} \\right)",
    desarrollo: "Distancia de cada carga al origen $(0,0)$:<br>&bull; $r_1 = \\sqrt{(0-0)^2 + (3-0)^2} = 3.0\\text{ m}$<br>&bull; $r_2 = \\sqrt{(4-0)^2 + (0-0)^2} = 4.0\\text{ m}$<br><br>Superposición escalar de potenciales:<br>$$V = (8.988 \\times 10^9) \\left( \\frac{3.0 \\times 10^{-6}}{3.0} + \\frac{-4.0 \\times 10^{-6}}{4.0} \\right)$$<br>$$V = (8.988 \\times 10^9)(1.0 \\times 10^{-6} - 1.0 \\times 10^{-6}) = 0.00\\text{ V}$$",
    resultado: "$0.00\\text{ V}$"
  },
  {
    id: "s7_7", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Desarrollo Matemático", numero: 7,
    pregunta: "Datos: Una carga $q = +5.0\\text{ nC}$ se mueve desde un punto con $V_A = 100\\text{ V}$ hasta un punto con $V_B = 250\\text{ V}$. Calcule el trabajo realizado por el campo eléctrico.",
    formula: "W_{\\text{campo}} = -\\Delta U_E = -q(V_B - V_A)",
    desarrollo: "El trabajo realizado por la fuerza eléctrica del campo es el opuesto del cambio de energía potencial:<br>$$\\Delta V = V_B - V_A = 250\\text{ V} - 100\\text{ V} = 150\\text{ V}$$<br>$$W_{\\text{campo}} = -(5.0 \\times 10^{-9}\\text{ C})(150\\text{ V}) = -7.50 \\times 10^{-7}\\text{ J}$$<br>*(Nota: Es negativo porque una carga positiva que se desplaza hacia un potencial más alto va en contra de la fuerza eléctrica natural).*",
    resultado: "$-7.50 \\times 10^{-7}\\text{ J} = -0.75\\ \\mu\\text{J}$"
  },
  {
    id: "s7_8", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Desarrollo Matemático", numero: 8,
    pregunta: "Datos: Un anillo de radio $R = 0.5\\text{ m}$ tiene una carga total $Q = +12\\ \\mu\\text{C}$ distribuida uniformemente. Deduzca y calcule el potencial en un punto sobre el eje del anillo a una distancia $x = 1.2\\text{ m}$ de su centro.",
    formula: "V = k_e \\int \\frac{dq}{r} = \\frac{k_e Q}{\\sqrt{R^2 + x^2}}",
    desarrollo: "<strong>Deducción:</strong> Todo elemento diferencial de carga $dq$ del anillo se encuentra a la misma distancia $r = \\sqrt{R^2 + x^2}$ del punto axial $P$. Al integrar: $V = k_e \\int \\frac{dq}{\\sqrt{R^2 + x^2}} = \\frac{k_e}{\\sqrt{R^2 + x^2}} \\int dq = \\frac{k_e Q}{\\sqrt{R^2 + x^2}}$.<br><br><strong>Cálculo numérico:</strong><br>&bull; Distancia: $r = \\sqrt{0.5^2 + 1.2^2} = \\sqrt{0.25 + 1.44} = \\sqrt{1.69} = 1.30\\text{ m}$<br>&bull; Potencial (con $k_e = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$):<br>$$V = \\frac{(8.99 \\times 10^9)(12.0 \\times 10^{-6})}{1.30} = \\frac{107,880}{1.30} = 82,984.6\\text{ V}$$",
    resultado: "$V = 82,984.6\\text{ V} \\ (82.98\\text{ kV})$"
  },
  {
    id: "s7_9", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Desarrollo Matemático", numero: 9,
    pregunta: "Datos: El potencial eléctrico en una región está dado por $V(x, y) = 3x^2y - 5x$. Encuentre la expresión para el vector campo eléctrico $\\vec{E}$ en el punto $(1, 2)\\text{ m}$.",
    formula: "E_x = -\\frac{\\partial V}{\\partial x}, \\quad E_y = -\\frac{\\partial V}{\\partial y}",
    desarrollo: "Calculando las derivadas parciales con signo negativo:<br>$$E_x = -\\frac{\\partial}{\\partial x}(3x^2y - 5x) = -(6xy - 5) = -6xy + 5$$<br>$$E_y = -\\frac{\\partial}{\\partial y}(3x^2y - 5x) = -3x^2$$<br><br>Evaluando en $(x = 1\\text{ m}, y = 2\\text{ m})$:<br>&bull; $E_x = -6(1)(2) + 5 = -12 + 5 = -7.0\\text{ V/m}$<br>&bull; $E_y = -3(1)^2 = -3.0\\text{ V/m}$<br>&bull; Módulo: $|\\vec{E}| = \\sqrt{(-7)^2 + (-3)^2} = \\sqrt{58} \\approx 7.62\\text{ V/m}$.",
    resultado: "$\\vec{E} = (-7.0\\hat{i} - 3.0\\hat{j})\\text{ V/m} \\quad (|\\vec{E}| = 7.62\\text{ V/m})$"
  },
  {
    id: "s7_10", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Desarrollo Matemático", numero: 10,
    pregunta: "Datos: Una varilla delgada de longitud $L = 2.0\\text{ m}$ tiene una densidad de carga lineal uniforme $\\lambda = +4.0\\ \\mu\\text{C/m}$. Calcule el potencial en un punto a una distancia $d = 0.5\\text{ m}$ de uno de sus extremos, a lo largo de su eje.",
    formula: "V = k_e \\int_d^{d+L} \\frac{\\lambda dx}{x} = k_e \\lambda \\ln\\left(\\frac{d+L}{d}\\right)",
    desarrollo: "Colocando el punto de observación en el origen $x = 0$, la varilla se ubica desde $x = d = 0.5\\text{ m}$ hasta $x = d + L = 2.5\\text{ m}$. Cada segmento diferencial $dx$ aporta $dq = \\lambda dx$ a distancia $x$.<br>$$V = k_e \\lambda [\\ln x]_d^{d+L} = k_e \\lambda \\ln\\left( \\frac{0.5 + 2.0}{0.5} \\right) = k_e \\lambda \\ln(5.0)$$<br>Con $k_e = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$:<br>$$V = (8.99 \\times 10^9)(4.0 \\times 10^{-6}) \\ln(5.0) = 35,960 \\times 1.609438 = 57,875.4\\text{ V}$$",
    resultado: "$V = 57,875.4\\text{ V} \\ (57.88\\text{ kV})$"
  },
  {
    id: "s7_11", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Aplicación", numero: 11,
    pregunta: "Datos: Un acelerador de partículas somete a un protón ($q = 1.6 \\times 10^{-19}\\text{ C}, m = 1.67 \\times 10^{-27}\\text{ kg}$) desde el reposo a una diferencia de potencial de $15,000\\text{ V}$. Calcule la velocidad final del protón.",
    formula: "\\frac{1}{2} m v^2 = q \\Delta V \\implies v = \\sqrt{\\frac{2 q \\Delta V}{m}}",
    desarrollo: "Por el teorema de conservación de la energía mecánica en un sistema conservativo aislado:<br>$$v = \\sqrt{\\frac{2(1.60 \\times 10^{-19}\\text{ C})(15,000\\text{ V})}{1.67 \\times 10^{-27}\\text{ kg}}} = \\sqrt{\\frac{4.80 \\times 10^{-15}}{1.67 \\times 10^{-27}}} = \\sqrt{2.874 \\times 10^{12}} = 1.695 \\times 10^6\\text{ m/s} \\approx 1.69 \\times 10^6\\text{ m/s}$$",
    resultado: "$v = 1.69 \\times 10^6\\text{ m/s} \\ (1,695\\text{ km/s})$"
  },
  {
    id: "s7_12", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Aplicación", numero: 12,
    pregunta: "Datos: Una esfera conductora de un generador Van de Graaff tiene un radio $R = 0.15\\text{ m}$ y el aire se ioniza si el campo eléctrico excede $3.0 \\times 10^6\\text{ V/m}$. Calcule el potencial máximo que puede alcanzar la esfera.",
    formula: "V_{\\text{máx}} = E_{\\text{máx}} \\cdot R",
    desarrollo: "En la superficie de una esfera conductora aislada, el campo es $E = \\frac{k_e Q}{R^2}$ y el potencial es $V = \\frac{k_e Q}{R}$. Sustituyendo directamente:<br>$$V_{\\text{máx}} = E_{\\text{máx}} \\cdot R = (3.0 \\times 10^6\\text{ V/m})(0.15\\text{ m}) = 450,000\\text{ V} = 450\\text{ kV}$$",
    resultado: "$V_{\\text{máx}} = 450,000\\text{ V} \\ (450\\text{ kV})$"
  },
  {
    id: "s7_13", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Aplicación", numero: 13,
    pregunta: "Datos: En un tubo de rayos catódicos analógico, dos placas separadas por $2.0\\text{ cm}$ tienen una diferencia de potencial de $400\\text{ V}$. Determine el módulo del campo eléctrico uniforme entre ellas.",
    formula: "E = \\frac{\\Delta V}{d}",
    desarrollo: "Distancia entre placas en metros: $d = 2.0\\text{ cm} = 0.02\\text{ m}$.<br>$$E = \\frac{400\\text{ V}}{0.02\\text{ m}} = 20,000\\text{ V/m} = 2.0 \\times 10^4\\text{ V/m}$$",
    resultado: "$E = 20,000\\text{ V/m} = 2.0 \\times 10^4\\text{ V/m}$"
  },
  {
    id: "s7_14", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Aplicación", numero: 14,
    pregunta: "Datos: Un sistema de blindaje industrial requiere una esfera conductora hueca con radio interno $R_1 = 10\\text{ cm}$ y externo $R_2 = 15\\text{ cm}$. Si se introduce una carga central de $2.0\\ \\mu\\text{C}$, determine el potencial en la superficie exterior.",
    formula: "V(R_2) = \\frac{k_e q}{R_2}",
    desarrollo: "Por inducción electrostática, la carga central $+q$ induce una carga $-q$ en la pared interior y una carga $+q$ en la superficie exterior. Para todo radio $r \\ge R_2 = 0.15\\text{ m}$, el campo eléctrico es exactamente el de una carga puntual $+q$. Con $k_e = 8.99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$:<br>$$V(R_2) = \\frac{(8.99 \\times 10^9)(2.0 \\times 10^{-6})}{0.15\\text{ m}} = \\frac{17,980}{0.15} = 119,866.7\\text{ V}$$",
    resultado: "$V = 119,866.7\\text{ V} \\ (119.87\\text{ kV})$"
  },
  {
    id: "s7_15", semana: 7, semanaTitle: "Potencial Eléctrico", categoria: "Aplicación", numero: 15,
    pregunta: "Datos: Para evitar descargas electrostáticas en una línea de ensamblaje microelectrónico, el potencial no debe superar los $50\\text{ V}$ a $10\\text{ cm}$ de un componente. Si el componente se modela como carga puntual, determine su carga máxima permitida.",
    formula: "V = \\frac{k_e q_{\\text{máx}}}{r} \\implies q_{\\text{máx}} = \\frac{V r}{k_e}",
    desarrollo: "Distancia en metros: $r = 10\\text{ cm} = 0.10\\text{ m}$.<br>$$q_{\\text{máx}} = \\frac{(50\\text{ V})(0.10\\text{ m})}{8.988 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2} = \\frac{5.0}{8.988 \\times 10^9} \\approx 5.56 \\times 10^{-10}\\text{ C} = 0.556\\text{ nC}$$",
    resultado: "$5.56 \\times 10^{-10}\\text{ C} = 0.556\\text{ nC} = 556\\text{ pC}$"
  },

  // ==================== SEMANA 8 ====================
  {
    id: "s8_1", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Análisis y Lógica", numero: 1,
    pregunta: "Si se duplica la carga neta de un capacitor, ¿qué ocurre con su capacitancia? Explique.",
    formula: "C = \\frac{Q}{\\Delta V} = \\frac{\\epsilon_0 A}{d}",
    desarrollo: "La capacitancia <strong>permanece constante (no cambia)</strong>. La capacitancia es una propiedad física y geométrica del dispositivo (depende del área, forma, distancia de placas y dieléctrico). Si la carga se duplica ($Q \\rightarrow 2Q$), la diferencia de potencial entre placas también se duplica de manera directamente proporcional ($\\Delta V \\rightarrow 2\\Delta V$), manteniendo la relación $C = Q/\\Delta V$ constante.",
    resultado: "Permanece igual ($C = \\text{constante}$)"
  },
  {
    id: "s8_2", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Análisis y Lógica", numero: 2,
    pregunta: "Un capacitor de placas paralelas se conecta a una batería y luego se desconecta. Si las placas se separan más, ¿qué sucede con la energía almacenada? ¿De dónde proviene ese cambio de energía?",
    formula: "U = \\frac{Q^2}{2C}, \\quad C = \\frac{\\epsilon_0 A}{d}",
    desarrollo: "Al desconectar la batería, la carga $Q$ permanece constante. Al separar las placas ($d$ aumenta), la capacitancia $C$ disminuye. Como $U = \\frac{Q^2}{2C}$, la energía electrostática <strong>aumenta</strong>. Este incremento de energía proviene del <strong>trabajo mecánico positivo</strong> que debe realizar un agente externo para separar las placas en contra de la fuerza de atracción electrostática atractiva entre cargas opuestas.",
    resultado: "Aumenta (proviene del trabajo mecánico externo realizado)"
  },
  {
    id: "s8_3", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Análisis y Lógica", numero: 3,
    pregunta: "Explique físicamente por qué la inserción de un material dieléctrico aumenta la capacitancia de un capacitor.",
    formula: "E = \\frac{E_0}{\\kappa}, \\quad \\Delta V = \\frac{\\Delta V_0}{\\kappa} \\implies C = \\kappa C_0",
    desarrollo: "Al insertar un dieléctrico, los dipolos moleculares se orientan con el campo eléctrico (polarización), generando cargas superficiales inducidas opuestas en los bordes del aislante. Esto crea un campo eléctrico inducido interno $E_{\\text{ind}}$ de sentido contrario, debilitando el campo neto a $E = E_0/\\kappa$. Consecuentemente, el voltaje entre placas cae a $\\Delta V = \\Delta V_0/\\kappa$. Para una carga fija $Q$, una reducción de voltaje resulta en un incremento en la capacitancia: $C = \\kappa C_0$.",
    resultado: "Aumenta ($C = \\kappa C_0$, por debilitamiento del campo interno)"
  },
  {
    id: "s8_4", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Análisis y Lógica", numero: 4,
    pregunta: "Dos capacitores idénticos se cargan a la misma diferencia de potencial. Al primero se le introduce un dieléctrico ($\\kappa > 1$) mientras sigue conectado a la batería, y al segundo tras desconectarlo. ¿Cuál almacena más energía final?",
    formula: "U_1 = \\frac{1}{2}(\\kappa C_0)(\\Delta V)^2 = \\kappa U_0, \\quad U_2 = \\frac{Q_0^2}{2(\\kappa C_0)} = \\frac{U_0}{\\kappa}",
    desarrollo: "&bull; <strong>Capacitor 1 (Conectado, $\\Delta V$ cte)</strong>: $U_1 = \\kappa U_0$ (su energía aumenta).<br>&bull; <strong>Capacitor 2 (Desconectado, $Q$ cte)</strong>: $U_2 = \\frac{U_0}{\\kappa}$ (su energía disminuye).<br>Como $\\kappa > 1$, se cumple que $U_1 = \\kappa^2 U_2 > U_2$.",
    resultado: "El primer capacitor (el que permanece conectado a la batería)"
  },
  {
    id: "s8_5", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Análisis y Lógica", numero: 5,
    pregunta: "¿Qué es la rigidez dieléctrica de un material y qué relación tiene con el voltaje máximo de operación de un capacitor?",
    formula: "\\Delta V_{\\text{máx}} = E_{\\text{ruptura}} \\cdot d",
    desarrollo: "La rigidez dieléctrica es el campo eléctrico máximo que un aislante puede resistir antes de ionizarse y comenzar a conducir corriente súbitamente (ruptura dieléctrica). Su relación con el voltaje de diseño es $\\Delta V_{\\text{máx}} = E_{\\text{ruptura}} \\cdot d$, estableciendo el límite seguro de tensión antes de la destrucción del componente.",
    resultado: "Fija el voltaje máximo seguro: $\\Delta V_{\\text{máx}} = E_{\\text{ruptura}} \\cdot d$"
  },
  {
    id: "s8_6", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Desarrollo Matemático", numero: 6,
    pregunta: "Datos: Un capacitor de placas paralelas tiene un área de placa $A = 0.04\\text{ m}^2$ y separación $d = 1.0\\text{ mm}$. Calcule su capacitancia en el vacío.",
    formula: "C_0 = \\frac{\\epsilon_0 A}{d}",
    desarrollo: "Separación en metros: $d = 1.0 \\times 10^{-3}\\text{ m}$.<br>$$C_0 = \\frac{(8.854 \\times 10^{-12}\\text{ F/m})(0.04\\text{ m}^2)}{1.0 \\times 10^{-3}\\text{ m}} = 3.54 \\times 10^{-10}\\text{ F} = 354\\text{ pF}$$",
    resultado: "$C_0 = 354\\text{ pF} \\ (3.54 \\times 10^{-10}\\text{ F})$"
  },
  {
    id: "s8_7", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Desarrollo Matemático", numero: 7,
    pregunta: "Datos: Un capacitor esférico está formado por dos esferas concéntricas de radios $a = 5.0\\text{ cm}$ y $b = 8.0\\text{ cm}$. Calcule su capacitancia.",
    formula: "C = \\frac{a b}{k_e (b - a)}",
    desarrollo: "Radios en metros: $a = 0.05\\text{ m}$, $b = 0.08\\text{ m}$, $\\Delta r = b - a = 0.03\\text{ m}$.<br>$$C = \\frac{(0.05)(0.08)}{(8.988 \\times 10^9)(0.03)} = \\frac{0.0040}{2.6964 \\times 10^8} \\approx 1.48 \\times 10^{-11}\\text{ F} = 14.8\\text{ pF}$$",
    resultado: "$C = 14.8\\text{ pF} \\ (1.48 \\times 10^{-11}\\text{ F})$"
  },
  {
    id: "s8_8", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Desarrollo Matemático", numero: 8,
    pregunta: "Datos: Un capacitor de $10\\ \\mu\\text{F}$ se conecta a una fuente de $12\\text{ V}$. Calcule la energía total almacenada en el campo eléctrico del dispositivo.",
    formula: "U_E = \\frac{1}{2} C (\\Delta V)^2",
    desarrollo: "$$U_E = \\frac{1}{2} (10.0 \\times 10^{-6}\\text{ F})(12.0\\text{ V})^2 = 0.5 \\times 10^{-5} \\times 144 = 7.20 \\times 10^{-4}\\text{ J} = 0.72\\text{ mJ}$$",
    resultado: "$U = 7.20 \\times 10^{-4}\\text{ J} = 0.72\\text{ mJ} = 720\\ \\mu\\text{J}$"
  },
  {
    id: "s8_9", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Desarrollo Matemático", numero: 9,
    pregunta: "Datos: Se introduce un material dieléctrico de constante $\\kappa = 3.5$ en un capacitor de placas paralelas inicialmente vacío de $250\\text{ pF}$ que mantiene una carga constante $Q = 5.0\\text{ nC}$. Calcule la nueva diferencia de potencial.",
    formula: "\\Delta V = \\frac{\\Delta V_0}{\\kappa} = \\frac{Q}{\\kappa C_0}",
    desarrollo: "Voltaje inicial sin dieléctrico:<br>$$\\Delta V_0 = \\frac{Q}{C_0} = \\frac{5.0 \\times 10^{-9}\\text{ C}}{250 \\times 10^{-12}\\text{ F}} = 20.0\\text{ V}$$<br>Con carga constante, el voltaje se reduce por factor $\\kappa$:<br>$$\\Delta V = \\frac{20.0\\text{ V}}{3.5} \\approx 5.71\\text{ V}$$",
    resultado: "$\\Delta V = 5.71\\text{ V}$"
  },
  {
    id: "s8_10", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Desarrollo Matemático", numero: 10,
    pregunta: "Datos: Un capacitor cilíndrico tiene un radio interno $a = 1.0\\text{ mm}$, radio externo $b = 3.0\\text{ mm}$ y longitud $L = 0.5\\text{ m}$. Calcule su capacitancia si el espacio interelectródico está lleno de aire.",
    formula: "C = \\frac{L}{2 k_e \\ln(b/a)}",
    desarrollo: "Razón geométrica: $\\frac{b}{a} = \\frac{3.0}{1.0} = 3.0 \\implies \\ln(3.0) \\approx 1.09861$.<br>$$C = \\frac{0.50}{2(8.988 \\times 10^9)(1.09861)} = \\frac{0.50}{1.9748 \\times 10^{10}} \\approx 2.53 \\times 10^{-11}\\text{ F} = 25.3\\text{ pF}$$",
    resultado: "$C = 25.3\\text{ pF} \\ (2.53 \\times 10^{-11}\\text{ F})$"
  },
  {
    id: "s8_11", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Aplicación", numero: 11,
    pregunta: "Datos: Un desfibrilador médico utiliza un capacitor que almacena $400\\text{ J}$ de energía a un voltaje de $2,000\\text{ V}$. Calcule el valor de la capacitancia necesaria.",
    formula: "U = \\frac{1}{2} C (\\Delta V)^2 \\implies C = \\frac{2U}{(\\Delta V)^2}",
    desarrollo: "$$C = \\frac{2(400\\text{ J})}{(2000\\text{ V})^2} = \\frac{800}{4.0 \\times 10^6} = 2.00 \\times 10^{-4}\\text{ F} = 200\\ \\mu\\text{F}$$",
    resultado: "$C = 200\\ \\mu\\text{F} \\ (2.00 \\times 10^{-4}\\text{ F})$"
  },
  {
    id: "s8_12", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Aplicación", numero: 12,
    pregunta: "Datos: El teclado de una computadora utiliza capacitores de placas variables bajo cada tecla. Si el área es $A = 0.5\\text{ cm}^2$ y la separación normal es $d = 1.2\\text{ mm}$, calcule el cambio de capacitancia si la tecla se presiona disminuyendo la separación a $0.4\\text{ mm}$.",
    formula: "C = \\frac{\\epsilon_0 A}{d}, \\quad \\Delta C = C_2 - C_1",
    desarrollo: "Área: $A = 0.5 \\times 10^{-4}\\text{ m}^2 = 5.0 \\times 10^{-5}\\text{ m}^2$.<br>&bull; Capacitancia inicial ($d_1 = 1.2\\text{ mm}$): $C_1 = \\frac{(8.85 \\times 10^{-12})(5.0 \\times 10^{-5})}{1.2 \\times 10^{-3}} \\approx 0.3688\\text{ pF}$<br>&bull; Capacitancia presionada ($d_2 = 0.4\\text{ mm}$): $C_2 = \\frac{(8.85 \\times 10^{-12})(5.0 \\times 10^{-5})}{0.4 \\times 10^{-3}} \\approx 1.1063\\text{ pF}$<br>&bull; Variación: $\\Delta C = C_2 - C_1 = 1.1063 - 0.3688 = 0.7375\\text{ pF} \\approx 0.737\\text{ pF}$.",
    resultado: "$\\Delta C = 0.737\\text{ pF} \\ (7.37 \\times 10^{-13}\\text{ F})$"
  },
  {
    id: "s8_13", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Aplicación", numero: 13,
    pregunta: "Datos: Un ingeniero diseña un capacitor utilizando papel encerado ($\\kappa = 2.5$, rigidez dieléctrica $= 15 \\times 10^6\\text{ V/m}$) de espesor $d = 0.1\\text{ mm}$. Si el área es $A = 2.0\\text{ m}^2$, calcule el voltaje máximo seguro si se aplica un factor de seguridad del $50\\%$ (mitad de la rigidez).",
    formula: "V_{\\text{seguro}} = E_{\\text{seguro}} \\cdot d",
    desarrollo: "Rigidez admisible con factor de seguridad:<br>$$E_{\\text{seguro}} = 0.50 \\times (15.0 \\times 10^6\\text{ V/m}) = 7.50 \\times 10^6\\text{ V/m}$$<br>Espesor: $d = 0.1\\text{ mm} = 1.0 \\times 10^{-4}\\text{ m}$.<br>$$V_{\\text{máx, seguro}} = (7.50 \\times 10^6\\text{ V/m})(1.0 \\times 10^{-4}\\text{ m}) = 750\\text{ V}$$",
    resultado: "$V_{\\text{seguro}} = 750\\text{ V}$"
  },
  {
    id: "s8_14", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Aplicación", numero: 14,
    pregunta: "Datos: Un sensor de humedad industrial mide la capacitancia de un dieléctrico poroso. Aire seco tiene $\\kappa \\approx 1$ y agua pura tiene $\\kappa \\approx 80$. Si el sensor vacío mide $100\\text{ pF}$, determine la capacitancia teórica si los poros se inundan al $10\\%$ con agua pura (asuma mezcla lineal $\\kappa_{\\text{prom}} = 0.9\\kappa_{\\text{aire}} + 0.1\\kappa_{\\text{agua}}$).",
    formula: "C = \\kappa_{\\text{prom}} C_0",
    desarrollo: "Constante dieléctrica ponderada:<br>$$\\kappa_{\\text{prom}} = 0.9(1.0) + 0.1(80.0) = 0.9 + 8.0 = 8.9$$<br>Capacitancia final:<br>$$C = 8.9 \\times 100\\text{ pF} = 890\\text{ pF}$$",
    resultado: "$C = 890\\text{ pF} \\ (0.89\\text{ nF})$"
  },
  {
    id: "s8_15", semana: 8, semanaTitle: "Capacitancia & Dieléctricos", categoria: "Aplicación", numero: 15,
    pregunta: "Datos: Un cable coaxial de alta tensión puede modelarse como un capacitor cilíndrico de longitud $L = 10\\text{ m}$, con radios $a = 0.5\\text{ cm}$ y $b = 1.5\\text{ cm}$, aislado con polietileno ($\\kappa = 2.3$). Calcule la carga total por unidad de longitud si opera a $5,000\\text{ V}$.",
    formula: "\\lambda = \\frac{Q}{L} = \\left(\\frac{C}{L}\\right)\\Delta V = \\frac{\\kappa \\Delta V}{2 k_e \\ln(b/a)}",
    desarrollo: "Razón de radios: $\\frac{b}{a} = \\frac{1.5}{0.5} = 3.0 \\implies \\ln(3.0) \\approx 1.09861$.<br>Capacitancia por unidad de longitud:<br>$$\\frac{C}{L} = \\frac{2.3}{2(8.988 \\times 10^9)(1.09861)} \\approx 1.1646 \\times 10^{-10}\\text{ F/m}$$<br>Carga lineal a $5,000\\text{ V}$:<br>$$\\lambda = (1.1646 \\times 10^{-10}\\text{ F/m})(5000\\text{ V}) \\approx 5.82 \\times 10^{-7}\\text{ C/m} = 0.582\\ \\mu\\text{C/m}$$",
    resultado: "$\\lambda = 5.82 \\times 10^{-7}\\text{ C/m} = 0.582\\ \\mu\\text{C/m} = 582\\text{ nC/m}$"
  },

  // ==================== SEMANA 9 ====================
  {
    id: "s9_1", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Análisis y Lógica", numero: 1,
    pregunta: "Al conectar dos capacitores diferentes en serie, ¿qué magnitud física es idéntica en ambos? ¿Y si se conectan en paralelo?",
    formula: "\\text{Serie: } Q_1 = Q_2 = Q_{\\text{tot}}; \\quad \\text{Paralelo: } \\Delta V_1 = \\Delta V_2 = \\Delta V_{\\text{tot}}",
    desarrollo: "En <strong>serie</strong>, la magnitud idéntica es la <strong>carga eléctrica ($Q$)</strong>, porque la carga que sale de una placa debe transferirse exactamente a la placa adyacente del siguiente capacitor por aislamiento.<br>En <strong>paralelo</strong>, la magnitud idéntica es la <strong>diferencia de potencial (voltaje $\\Delta V$)</strong>, debido a que las terminales correspondientes de ambos capacitores están unidas directamente a los mismos nodos de la batería.",
    resultado: "Serie: Carga ($Q$) idéntica | Paralelo: Voltaje ($\\Delta V$) idéntico"
  },
  {
    id: "s9_2", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Análisis y Lógica", numero: 2,
    pregunta: "Si desea almacenar la máxima cantidad de energía combinando tres capacitores diferentes con una sola fuente de voltaje, ¿debería conectarlos en serie o en paralelo? Justifique.",
    formula: "U = \\frac{1}{2} C_{\\text{eq}} (\\Delta V)^2",
    desarrollo: "Debe conectarlos en <strong>paralelo</strong>. La energía almacenada con voltaje fijo $\\Delta V$ es directamente proporcional a la capacitancia equivalente $C_{\\text{eq}}$. En paralelo, la capacitancia equivalente es la suma directa ($C_{\\text{eq}} = C_1 + C_2 + C_3$), maximizando la capacidad total y la energía. En serie, la capacitancia equivalente es menor que la del componente más pequeño.",
    resultado: "En paralelo (maximiza $C_{\\text{eq}}$ y la energía almacenada)"
  },
  {
    id: "s9_3", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Análisis y Lógica", numero: 3,
    pregunta: "Se conectan dos capacitores en serie. ¿La capacitancia equivalente es mayor, menor o igual que la capacitancia del capacitor más pequeño del grupo?",
    formula: "\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} \\implies C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2} < C_1, C_2",
    desarrollo: "Es estrictamente <strong>menor</strong> que la capacitancia del capacitor más pequeño. Al sumar los inversos $\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2}$, como $\\frac{1}{C_2} > 0$, se tiene $\\frac{1}{C_{\\text{eq}}} > \\frac{1}{C_1} \\implies C_{\\text{eq}} < C_1$.",
    resultado: "Menor que la del capacitor más pequeño ($C_{\\text{eq}} < C_{\\text{menor}}$)"
  },
  {
    id: "s9_4", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Análisis y Lógica", numero: 4,
    pregunta: "Si un capacitor en un circuito en paralelo falla poniéndose en cortocircuito (se comporta como un cable continuo), ¿qué ocurre con el resto de los capacitores en paralelo?",
    formula: "\\Delta V_{\\text{nodos}} = 0\\text{ V} \\implies Q_i = C_i (0) = 0",
    desarrollo: "El cortocircuito une directamente los nodos positivo y negativo de la red paralela, haciendo que la caída de tensión entre dichos nodos caiga a cero ($\\Delta V = 0$). En consecuencia, todos los demás capacitores en paralelo se <strong>descargan instantáneamente</strong> ($Q = 0$) y la fuente de poder sufre una sobrecorriente masiva a través del componente fallado.",
    resultado: "Todos se descargan ($\\Delta V = 0$) y la fuente queda en cortocircuito directo"
  },
  {
    id: "s9_5", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Análisis y Lógica", numero: 5,
    pregunta: "Explique el proceso físico de redistribución de carga cuando un capacitor cargado se conecta en paralelo con uno idéntico pero completamente descargado.",
    formula: "Q_f = \\frac{Q_0}{2}, \\quad V_f = \\frac{V_0}{2}, \\quad U_f = \\frac{1}{2} U_0",
    desarrollo: "La diferencia de potencial inicial del capacitor cargado impulsa electrones hacia la placa del capacitor descargado hasta alcanzar el equilibrio electrostático (mismo potencial). Al ser idénticos ($C_1 = C_2 = C$), la carga total conservada $Q_0$ se reparte exactamente a partes iguales: $Q_f = Q_0/2$ y $V_f = V_0/2$. La energía almacenada final total es $U_f = 2 \\times [\\frac{1}{2} C (V_0/2)^2] = \\frac{1}{2} U_0$; el $50\\%$ restante de energía se disipa en calor por efecto Joule en los alambres y ondas electromagnéticas durante el transitorio.",
    resultado: "Carga y voltaje se dividen ($Q_0/2, V_0/2$); se disipa el 50% de la energía"
  },
  {
    id: "s9_6", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Desarrollo Matemático", numero: 6,
    pregunta: "Datos: Se conectan tres capacitores de $2.0\\ \\mu\\text{F}$, $4.0\\ \\mu\\text{F}$ y $6.0\\ \\mu\\text{F}$ en serie a una batería de $24\\text{ V}$. Calcule la capacitancia equivalente del circuito.",
    formula: "\\frac{1}{C_{\\text{eq}}} = \\frac{1}{2.0} + \\frac{1}{4.0} + \\frac{1}{6.0}",
    desarrollo: "$$\\frac{1}{C_{\\text{eq}}} = \\frac{6 + 3 + 2}{12} = \\frac{11}{12}\\ \\mu\\text{F}^{-1} \\implies C_{\\text{eq}} = \\frac{12}{11}\\ \\mu\\text{F} \\approx 1.091\\ \\mu\\text{F}$$",
    resultado: "$C_{\\text{eq}} = 1.091\\ \\mu\\text{F} \\ (12/11\\ \\mu\\text{F})$"
  },
  {
    id: "s9_7", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Desarrollo Matemático", numero: 7,
    pregunta: "Datos: Con los mismos capacitores del problema anterior ($2.0\\ \\mu\\text{F}$, $4.0\\ \\mu\\text{F}$ y $6.0\\ \\mu\\text{F}$), calcule ahora la capacitancia equivalente si se conectan en paralelo a la misma fuente de $24\\text{ V}$.",
    formula: "C_{\\text{eq}} = C_1 + C_2 + C_3",
    desarrollo: "Suma directa en paralelo:<br>$$C_{\\text{eq}} = 2.0\\ \\mu\\text{F} + 4.0\\ \\mu\\text{F} + 6.0\\ \\mu\\text{F} = 12.0\\ \\mu\\text{F}$$",
    resultado: "$C_{\\text{eq}} = 12.0\\ \\mu\\text{F}$"
  },
  {
    id: "s9_8", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Desarrollo Matemático", numero: 8,
    pregunta: "Datos: Para el circuito en serie del problema 6, determine la carga y el voltaje en el capacitor de $2.0\\ \\mu\\text{F}$.",
    formula: "Q = C_{\\text{eq}} \\cdot \\Delta V, \\quad V_1 = \\frac{Q}{C_1}",
    desarrollo: "Carga común en serie (usando $C_{\\text{eq}} = 1.09\\ \\mu\\text{F}$ del problema 6):<br>$$Q = (1.09\\ \\mu\\text{F})(24\\text{ V}) = 26.16\\ \\mu\\text{C}$$<br>Voltaje en el capacitor de $2.0\\ \\mu\\text{F}$:<br>$$V_1 = \\frac{26.16\\ \\mu\\text{C}}{2.0\\ \\mu\\text{F}} = 13.08\\text{ V}$$<br>*(Con fracción exacta $12/11\\ \\mu\\text{F}$: $Q = 26.18\\ \\mu\\text{C}$ y $V_1 = 13.09\\text{ V}$)*.",
    resultado: "$Q = 26.16\\ \\mu\\text{C}, \\quad V_1 = 13.08\\text{ V} \\quad (\\text{o } 26.18\\ \\mu\\text{C}, 13.09\\text{ V})$"
  },
  {
    id: "s9_9", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Desarrollo Matemático", numero: 9,
    pregunta: "Datos: Un capacitor $C_1 = 4.0\\ \\mu\\text{F}$ se carga a $100\\text{ V}$ y luego se desconecta. Se conecta en paralelo con un capacitor $C_2 = 6.0\\ \\mu\\text{F}$ inicialmente descargado. Calcule el voltaje final de equilibrio del sistema.",
    formula: "Q_{\\text{tot}} = C_1 V_1, \\quad V_f = \\frac{Q_{\\text{tot}}}{C_1 + C_2}",
    desarrollo: "Carga total conservada:<br>$$Q_{\\text{tot}} = (4.0\\ \\mu\\text{F})(100\\text{ V}) = 400\\ \\mu\\text{C}$$<br>Capacitancia equivalente en paralelo:<br>$$C_{\\text{eq}} = 4.0\\ \\mu\\text{F} + 6.0\\ \\mu\\text{F} = 10.0\\ \\mu\\text{F}$$<br>Voltaje final:<br>$$V_f = \\frac{400\\ \\mu\\text{C}}{10.0\\ \\mu\\text{F}} = 40.0\\text{ V}$$",
    resultado: "$V_f = 40.0\\text{ V}$"
  },
  {
    id: "s9_10", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Desarrollo Matemático", numero: 10,
    pregunta: "Datos: En una red mixta, un capacitor de $3.0\\ \\mu\\text{F}$ está en serie con un bloque en paralelo compuesto por dos capacitores de $2.0\\ \\mu\\text{F}$ y $4.0\\ \\mu\\text{F}$. Calcule la capacitancia equivalente total.",
    formula: "C_p = C_2 + C_3, \\quad C_{\\text{eq}} = \\frac{C_1 C_p}{C_1 + C_p}",
    desarrollo: "Capacitancia del bloque en paralelo:<br>$$C_p = 2.0\\ \\mu\\text{F} + 4.0\\ \\mu\\text{F} = 6.0\\ \\mu\\text{F}$$<br>Reducción en serie con $C_1 = 3.0\\ \\mu\\text{F}$:<br>$$C_{\\text{eq}} = \\frac{3.0 \\times 6.0}{3.0 + 6.0} = \\frac{18.0}{9.0} = 2.00\\ \\mu\\text{F}$$",
    resultado: "$C_{\\text{eq}} = 2.00\\ \\mu\\text{F}$"
  },
  {
    id: "s9_11", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Aplicación", numero: 11,
    pregunta: "Datos: El sistema de flash de una cámara profesional requiere una capacitancia equivalente de $150\\ \\mu\\text{F}$ capaz de operar a $300\\text{ V}$. Si solo dispone de capacitores de $150\\ \\mu\\text{F}$ pero con un voltaje máximo de diseño de $150\\text{ V}$, diseñe el arreglo mínimo (número y tipo de conexión) necesario.",
    formula: "V_{\\text{rama}} = 150 + 150 = 300\\text{ V}, \\quad C_{\\text{eq}} = \\frac{150}{2} + \\frac{150}{2} = 150\\ \\mu\\text{F}",
    desarrollo: "Para soportar $300\\text{ V}$ con componentes de $150\\text{ V}$, cada rama debe tener 2 capacitores en serie ($150 + 150 = 300\\text{ V}$). Cada rama en serie de dos de $150\\ \\mu\\text{F}$ tiene una capacitancia de $75\\ \\mu\\text{F}$. Conectando 2 ramas en paralelo se obtienen los $150\\ \\mu\\text{F}$ requeridos ($75 + 75 = 150\\ \\mu\\text{F}$). Total: 4 capacitores en un arreglo 2x2.",
    resultado: "4 capacitores (2 ramas paralelas de 2 en serie)"
  },
  {
    id: "s9_12", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Aplicación", numero: 12,
    pregunta: "Datos: En un circuito sintonizador de radio, se requiere una capacitancia exacta de $7.5\\text{ pF}$. Si en el taller solo tiene componentes comerciales de $10\\text{ pF}$ y $5.0\\text{ pF}$, proponga una combinación que genere el valor exacto.",
    formula: "C_{\\text{eq}} = (5.0 \\text{ serie } 5.0) + 5.0 = 2.5 + 5.0 = 7.5\\text{ pF}",
    desarrollo: "Se emplean 3 capacitores de $5.0\\text{ pF}$:<br>1. Se conectan dos de $5.0\\text{ pF}$ en serie: $C_s = \\frac{5.0 \\times 5.0}{5.0 + 5.0} = 2.5\\text{ pF}$.<br>2. Se conecta este bloque en paralelo con un tercer capacitor de $5.0\\text{ pF}$: $C_{\\text{eq}} = 2.5 + 5.0 = 7.5\\text{ pF}$.",
    resultado: "3 capacitores de $5.0\\text{ pF}$ (dos en serie en paralelo con uno)"
  },
  {
    id: "s9_13", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Aplicación", numero: 13,
    pregunta: "Datos: Un sistema de respaldo de memoria de una computadora (UPS miniatura) utiliza una combinación en paralelo de 5 supercapacitores de $1.2\\text{ F}$ cada uno a un voltaje de $5.0\\text{ V}$. Calcule la energía total disponible para mantener la memoria viva durante un apagón.",
    formula: "C_{\\text{eq}} = 5 \\times 1.2\\text{ F} = 6.0\\text{ F}, \\quad U = \\frac{1}{2} C_{\\text{eq}} V^2",
    desarrollo: "Capacitancia total: $C_{\\text{eq}} = 5 \\times 1.2 = 6.0\\text{ F}$.<br>$$U = \\frac{1}{2}(6.0\\text{ F})(5.0\\text{ V})^2 = 3.0 \\times 25.0 = 75.0\\text{ J}$$",
    resultado: "$U = 75.0\\text{ J}$"
  },
  {
    id: "s9_14", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Aplicación", numero: 14,
    pregunta: "Datos: Un filtro electrónico automotriz tiene dos capacitores en paralelo ($C_1 = 22\\ \\mu\\text{F}$, $C_2 = 47\\ \\mu\\text{F}$) conectados al tomacorriente de $12\\text{ V}$. Si un pico de tensión transitorio entrega repentinamente una carga extra de $1.0\\text{ mC}$ distribuida en la red, calcule el incremento en el voltaje del sistema.",
    formula: "\\Delta V = \\frac{\\Delta Q}{C_p} = \\frac{\\Delta Q}{C_1 + C_2}",
    desarrollo: "Capacitancia en paralelo: $C_p = 22 + 47 = 69\\ \\mu\\text{F} = 69 \\times 10^{-6}\\text{ F}$.<br>Carga extra: $\\Delta Q = 1.0\\text{ mC} = 1.0 \\times 10^{-3}\\text{ C}$.<br>$$\\Delta V = \\frac{1.0 \\times 10^{-3}\\text{ C}}{69 \\times 10^{-6}\\text{ F}} \\approx 14.49\\text{ V}$$",
    resultado: "$\\Delta V = 14.49\\text{ V}$"
  },
  {
    id: "s9_15", semana: 9, semanaTitle: "Circuitos de Capacitores", categoria: "Aplicación", numero: 15,
    pregunta: "Datos: Un módulo electrónico aeroespacial utiliza tres capacitores redundantes en serie de $10\\ \\mu\\text{F}$ cada uno. Si por vibración extrema el capacitor del centro falla y se rompe internamente abriendo el circuito (resistencia infinita), determine la nueva capacitancia del sistema entre los terminales principales.",
    formula: "\\text{Ruptura en circuito abierto} \\implies C_{\\text{eq}} = 0\\text{ F}",
    desarrollo: "En una conexión en serie, cualquier componente que sufra una apertura (resistencia infinita y desconexión física de camino conductor) interrumpe la continuidad del circuito entre los terminales principales, anulando el flujo de corriente y la capacidad de almacenamiento relativo.",
    resultado: "$C_{\\text{eq}} = 0\\text{ F}$ (Circuito Abierto)"
  },

  // ==================== SEMANA 10 ====================
  {
    id: "s10_1", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Análisis y Lógica", numero: 1,
    pregunta: "Explique la diferencia fundamental entre los conceptos de resistencia eléctrica y resistividad. ¿Cuál es una propiedad intrínseca del material?",
    formula: "R = \\rho \\frac{\\ell}{A}",
    desarrollo: "La <strong>resistividad ($\\rho$)</strong> es una propiedad física <strong>intrínseca</strong> y microscópica de la sustancia que caracteriza su oposición atómica al flujo de portadores de carga; no depende de la forma ni del tamaño del objeto, solo del material y la temperatura. La <strong>resistencia ($R$)</strong> es una propiedad extrínseca y macroscópica de una muestra específica de conductor, que depende tanto de su resistividad intrínseca como de sus dimensiones geométricas (longitud $\\ell$ y área transversal $A$).",
    resultado: "La propiedad intrínseca es la resistividad ($\\rho$)"
  },
  {
    id: "s10_2", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Análisis y Lógica", numero: 2,
    pregunta: "Si un cable cilíndrico de cobre se estira uniformemente hasta duplicar su longitud original manteniendo su volumen constante, ¿cómo cambia su resistencia eléctrica?",
    formula: "V = A_0 \\ell_0 = A_f \\ell_f \\implies A_f = \\frac{A_0}{2}, \\quad R_f = \\rho \\frac{2\\ell_0}{A_0/2} = 4 R_0",
    desarrollo: "Al mantener el volumen constante ($V = A \\cdot \\ell = \\text{cte}$), si la longitud se duplica ($\\ell_f = 2\\ell_0$), el área de la sección transversal debe reducirse a la mitad ($A_f = A_0/2$). Sustituyendo en la fórmula de la resistencia:<br>$$R_f = \\rho \\frac{2\\ell_0}{A_0 / 2} = 4 \\left( \\rho \\frac{\\ell_0}{A_0} \\right) = 4 R_0$$",
    resultado: "Se cuadruplica ($R_f = 4 R_0$)"
  },
  {
    id: "s10_3", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Análisis y Lógica", numero: 3,
    pregunta: "¿Cómo afecta el incremento de temperatura a la resistencia eléctrica de un conductor metálico típico en comparación con un semiconductor? Explique brevemente la razón física.",
    formula: "R(T) = R_0 [1 + \\alpha (T - T_0)]",
    desarrollo: "&bull; <strong>Conductor metálico típico:</strong> Su resistencia <strong>aumenta</strong> ($\\alpha > 0$). La densidad de portadores libres $n$ es constante; la energía térmica incrementa la vibración de la red cristalina iónica, aumentando la frecuencia de colisiones con los electrones.<br>&bull; <strong>Semiconductor:</strong> Su resistencia <strong>disminuye</strong> fuertemente ($\\alpha < 0$). La energía térmica rompe enlaces covalentes y promueve electrones a la banda de conducción, multiplicando exponencialmente la densidad de electrones libres $n$, superando el efecto de las colisiones.",
    resultado: "En metales aumenta (más choques); en semiconductores disminuye (más portadores)"
  },
  {
    id: "s10_4", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Análisis y Lógica", numero: 4,
    pregunta: "Defina la densidad de corriente ($J$) y explique su relación con la velocidad de deriva de los electrones portadores de carga.",
    formula: "\\vec{J} = \\frac{I}{A} = n q \\vec{v}_d",
    desarrollo: "La densidad de corriente $\\vec{J}$ es la corriente eléctrica por unidad de área transversal perpendicular al flujo de cargas ($J = I/A$, en $\\text{A/m}^2$). Microscópicamente, $\\vec{J} = n q \\vec{v}_d$, donde $n$ es la densidad volumétrica de portadores, $q$ su carga y $\\vec{v}_d$ la velocidad media de deriva. En metales donde los portadores son electrones ($q = -e$), $\\vec{J} = -n e \\vec{v}_d$, indicando que el vector $\\vec{J}$ apunta en sentido opuesto a la velocidad de arrastre de los electrones.",
    resultado: "$J = I/A = n q v_d$ (opuesta a la deriva de electrones)"
  },
  {
    id: "s10_5", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Análisis y Lógica", numero: 5,
    pregunta: "De acuerdo con la Ley de Ohm, si el voltaje aplicado a un elemento se duplica, la corriente se duplica. ¿Es esto válido para todos los componentes electrónicos? Dé un contraejemplo.",
    formula: "\\text{Óhmico: } I \\propto V \\iff R = \\text{constante}",
    desarrollo: "<strong>No</strong>, no es universal. La ley de Ohm es una relación empírica válida únicamente para materiales óhmicos. Contraejemplo: un <strong>diodo semiconductor</strong> (o diodo de unión p-n). En un diodo polarizado en directo, la corriente responde exponencialmente al voltaje ($I = I_s(e^{eV/kT} - 1)$); duplicar el voltaje puede aumentar la corriente cientos de veces.",
    resultado: "No es universal. Contraejemplo: diodo de unión p-n o bombilla incandescente"
  },
  {
    id: "s10_6", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Desarrollo Matemático", numero: 6,
    pregunta: "Datos: Un alambre de cobre ($\\rho = 1.7 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) tiene una longitud de $20\\text{ m}$ y un diámetro de $2.0\\text{ mm}$. Calcule su resistencia eléctrica a temperatura ambiente.",
    formula: "R = \\rho \\frac{\\ell}{\\pi r^2}",
    desarrollo: "Radio: $r = 1.0\\text{ mm} = 1.0 \\times 10^{-3}\\text{ m}$.<br>Área: $A = \\pi (1.0 \\times 10^{-3})^2 = \\pi \\times 10^{-6}\\text{ m}^2 \\approx 3.1416 \\times 10^{-6}\\text{ m}^2$.<br>$$R = \\frac{(1.7 \\times 10^{-8}\\ \\Omega\\cdot\\text{m})(20\\text{ m})}{\\pi \\times 10^{-6}\\text{ m}^2} = \\frac{0.34}{\\pi} \\approx 0.1082\\ \\Omega$$",
    resultado: "$R = 0.108\\ \\Omega = 108\\text{ m}\\Omega$"
  },
  {
    id: "s10_7", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Desarrollo Matemático", numero: 7,
    pregunta: "Datos: Por la sección transversal de un conductor circula una corriente dada por la función $I(t) = 2t^2 + 5\\text{ (A)}$. Calcule la carga total que pasa por dicha sección entre $t = 0\\text{ s}$ y $t = 3\\text{ s}$.",
    formula: "Q = \\int_0^3 I(t) dt",
    desarrollo: "$$Q = \\int_0^3 (2t^2 + 5) dt = \\left[ \\frac{2}{3} t^3 + 5t \\right]_0^3 = \\frac{2}{3}(27) + 5(3) = 18 + 15 = 33.0\\text{ C}$$",
    resultado: "$Q = 33.0\\text{ C}$"
  },
  {
    id: "s10_8", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Desarrollo Matemático", numero: 8,
    pregunta: "Datos: Una barra de aluminio tiene una resistencia de $50\\ \\Omega$ a $20^\\circ\\text{C}$. Calcule su resistencia a $120^\\circ\\text{C}$ sabiendo que su coeficiente térmico de resistividad es $\\alpha = 3.9 \\times 10^{-3}\\ ^\\circ\\text{C}^{-1}$.",
    formula: "R(T) = R_0 [1 + \\alpha \\Delta T]",
    desarrollo: "$$\\Delta T = 120^\\circ\\text{C} - 20^\\circ\\text{C} = 100^\\circ\\text{C}$$<br>$$R = 50 [1 + (3.9 \\times 10^{-3})(100)] = 50 [1 + 0.39] = 50 \\times 1.39 = 69.5\\ \\Omega$$",
    resultado: "$R = 69.5\\ \\Omega$"
  },
  {
    id: "s10_9", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Desarrollo Matemático", numero: 9,
    pregunta: "Datos: Un alambre cilíndrico transporta una corriente de $8.0\\text{ A}$. Si el radio del cable es de $1.5\\text{ mm}$, calcule el módulo de la densidad de corriente $J$.",
    formula: "J = \\frac{I}{A} = \\frac{I}{\\pi r^2}",
    desarrollo: "Radio: $r = 1.5 \\times 10^{-3}\\text{ m}$.<br>Área: $A = \\pi (1.5 \\times 10^{-3})^2 = 2.25\\pi \\times 10^{-6}\\text{ m}^2 \\approx 7.0686 \\times 10^{-6}\\text{ m}^2$.<br>$$J = \\frac{8.0\\text{ A}}{7.0686 \\times 10^{-6}\\text{ m}^2} \\approx 1.13 \\times 10^6\\text{ A/m}^2 = 1.13\\text{ MA/m}^2$$",
    resultado: "$J = 1.13 \\times 10^6\\text{ A/m}^2 = 1.13\\text{ MA/m}^2$"
  },
  {
    id: "s10_10", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Desarrollo Matemático", numero: 10,
    pregunta: "Datos: Un calentador eléctrico opera conectado a una línea de $120\\text{ V}$ y consume una corriente de $12\\text{ A}$. Calcule la potencia eléctrica disipada y la resistencia del filamento.",
    formula: "P = V \\cdot I, \\quad R = \\frac{V}{I}",
    desarrollo: "Potencia disipada:<br>$$P = (120\\text{ V})(12\\text{ A}) = 1440\\text{ W} = 1.44\\text{ kW}$$<br>Resistencia:<br>$$R = \\frac{120\\text{ V}}{12\\text{ A}} = 10.0\\ \\Omega$$",
    resultado: "$P = 1440\\text{ W} \\ (1.44\\text{ kW}), \\quad R = 10.0\\ \\Omega$"
  },
  {
    id: "s10_11", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Aplicación", numero: 11,
    pregunta: "Datos: En una instalación eléctrica residencial, se utiliza cable de cobre calibre 12 ($A = 3.31\\text{ mm}^2$). Si la corriente máxima permitida por seguridad es de $20\\text{ A}$, determine la caída de voltaje a lo largo de una línea de $50\\text{ m}$ (ida y vuelta total). (Use $\\rho_{\\text{Cu}} = 1.7 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$).",
    formula: "R = \\rho \\frac{\\ell}{A}, \\quad \\Delta V = I \\cdot R",
    desarrollo: "Área: $A = 3.31 \\times 10^{-6}\\text{ m}^2$.<br>Resistencia de la línea:<br>$$R = \\frac{(1.7 \\times 10^{-8})(50)}{3.31 \\times 10^{-6}} \\approx 0.2568\\ \\Omega$$<br>Caída de voltaje:<br>$$\\Delta V = (20\\text{ A})(0.2568\\ \\Omega) \\approx 5.14\\text{ V}$$",
    resultado: "$\\Delta V = 5.14\\text{ V}$"
  },
  {
    id: "s10_12", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Aplicación", numero: 12,
    pregunta: "Datos: Una línea de transmisión aérea de aluminio ($\\rho = 2.8 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) transporta energía a lo largo de $5.0\\text{ km}$. Si no se permite que la resistencia total exceda de $0.4\\ \\Omega$, calcule el diámetro mínimo requerido para el cable.",
    formula: "A = \\rho \\frac{\\ell}{R}, \\quad D = \\sqrt{\\frac{4A}{\\pi}}",
    desarrollo: "Longitud: $\\ell = 5000\\text{ m}$.<br>Área mínima de sección:<br>$$A = \\frac{(2.8 \\times 10^{-8})(5000)}{0.4} = 3.50 \\times 10^{-4}\\text{ m}^2$$<br>Diámetro del conductor:<br>$$D = \\sqrt{\\frac{4(3.50 \\times 10^{-4})}{\\pi}} = \\sqrt{4.4563 \\times 10^{-4}} \\approx 0.0211\\text{ m} = 21.1\\text{ mm}$$",
    resultado: "$D_{\\text{mín}} = 21.1\\text{ mm} = 2.11\\text{ cm}$"
  },
  {
    id: "s10_13", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Aplicación", numero: 13,
    pregunta: "Datos: El filamento de wolframio de una bombilla incandescente tradicional tiene una resistencia en frío ($20^\\circ\\text{C}$) de $15\\ \\Omega$. Cuando está encendido y conectado a $120\\text{ V}$, consume una potencia de $60\\text{ W}$. Determine la temperatura de operación del filamento. ($\\alpha_{\\text{wolframio}} = 4.5 \\times 10^{-3}\\ ^\\circ\\text{C}^{-1}$).",
    formula: "R_{\\text{cal}} = \\frac{V^2}{P}, \\quad T = T_0 + \\frac{R/R_0 - 1}{\\alpha}",
    desarrollo: "Resistencia en régimen caliente:<br>$$R_{\\text{cal}} = \\frac{120^2}{60} = \\frac{14,400}{60} = 240\\ \\Omega$$<br>Razón de variación térmica:<br>$$\\frac{R_{\\text{cal}}}{R_0} = \\frac{240}{15} = 16 = 1 + (4.5 \\times 10^{-3})(T_f - 20)$$<br>$$15 = 0.0045(T_f - 20) \\implies T_f - 20 = \\frac{15}{0.0045} = 3333.33^\\circ\\text{C} \\implies T_f = 3353.33^\\circ\\text{C}$$",
    resultado: "$T_f = 3353.33^\\circ\\text{C}$"
  },
  {
    id: "s10_14", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Aplicación", numero: 14,
    pregunta: "Datos: Un sensor biomédico mide la resistencia de una muestra de tejido cilíndrico de longitud $1.5\\text{ cm}$ y radio $4.0\\text{ mm}$. Si el ohmímetro registra $120\\ \\Omega$, determine la resistividad del tejido biológico analizado para diagnóstico.",
    formula: "\\rho = \\frac{R A}{\\ell} = \\frac{R \\pi r^2}{\\ell}",
    desarrollo: "Parámetros: $\\ell = 0.015\\text{ m}$, $r = 0.004\\text{ m}$.<br>Área: $A = \\pi (0.004)^2 = 1.6\\pi \\times 10^{-5} \\approx 5.0265 \\times 10^{-5}\\text{ m}^2$.<br>$$\\rho = \\frac{(120\\ \\Omega)(5.0265 \\times 10^{-5}\\text{ m}^2)}{0.015\\text{ m}} \\approx 0.402\\ \\Omega\\cdot\\text{m}$$",
    resultado: "$\\rho = 0.402\\ \\Omega\\cdot\\text{m}$"
  },
  {
    id: "s10_15", semana: 10, semanaTitle: "Corriente & Resistencia", categoria: "Aplicación", numero: 15,
    pregunta: "Datos: Un automóvil eléctrico consume $150\\text{ A}$ directos de su banco de baterías de $400\\text{ V}$ durante una aceleración en rampa. Calcule la energía total consumida en Kilovatios-hora (kWh) si mantiene este régimen durante exactamente $2.0\\text{ minutos}$.",
    formula: "P = V \\cdot I, \\quad E = P \\cdot t",
    desarrollo: "Potencia eléctrica:<br>$$P = (400\\text{ V})(150\\text{ A}) = 60,000\\text{ W} = 60\\text{ kW}$$<br>Tiempo en horas:<br>$$t = 2.0\\text{ min} = \\frac{2}{60}\\text{ h} = \\frac{1}{30}\\text{ h}$$<br>Energía en kWh:<br>$$E = 60\\text{ kW} \\times \\left(\\frac{1}{30}\\text{ h}\\right) = 2.00\\text{ kWh}$$<br>*(En Joules: $60000\\text{ W} \\times 120\\text{ s} = 7.20\\text{ MJ}$).*",
    resultado: "$E = 2.00\\text{ kWh} \\ (7.20\\text{ MJ})$"
  },

  // ==================== SEMANA 11 ====================
  {
    id: "s11_1", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Análisis y Lógica", numero: 1,
    pregunta: "Al conectar varios resistores de distintos valores en paralelo a una fuente de voltaje, ¿cuál de ellos disipará la mayor cantidad de potencia: el de mayor o el de menor resistencia? Justifique.",
    formula: "P = \\frac{V^2}{R}",
    desarrollo: "El de <strong>menor resistencia</strong> disipará la mayor cantidad de potencia. En una conexión en paralelo, todos los resistores están sometidos a la misma diferencia de potencial $V$. Dado que $P = \\frac{V^2}{R}$, a voltaje constante la potencia es inversamente proporcional a la resistencia ($P \\propto 1/R$). Por lo tanto, el resistor de menor resistencia conduce más corriente y disipa más calor.",
    resultado: "El de menor resistencia ($P = V^2/R$, voltaje idéntico)"
  },
  {
    id: "s11_2", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Análisis y Lógica", numero: 2,
    pregunta: "Si un resistor en una red en serie se quema y se abre por completo, ¿qué ocurre con la corriente en los demás resistores del circuito?",
    formula: "I = \\frac{V}{R_{\\text{eq}}} = \\frac{V}{\\infty} = 0\\text{ A}",
    desarrollo: "La corriente en todos los demás resistores cae instantáneamente a <strong>cero ($I = 0$)</strong>. En un circuito en serie existe una única trayectoria continua para el flujo de carga; si un elemento se abre (resistencia infinita), se interrumpe la continuidad eléctrica de todo el lazo.",
    resultado: "Cae a cero ($I = 0\\text{ A}$) en todos los demás resistores"
  },
  {
    id: "s11_3", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Análisis y Lógica", numero: 3,
    pregunta: "Explique conceptualmente por qué la resistencia equivalente de un arreglo de resistores en paralelo siempre es menor que el valor del resistor más pequeño del grupo.",
    formula: "\\frac{1}{R_{\\text{eq}}} = \\sum \\frac{1}{R_i}",
    desarrollo: "Porque cada rama en paralelo ofrece un camino alternativo e independiente para el flujo de portadores de carga, lo que equivale a ensanchar el área transversal total conductora del sistema (análogo a añadir carriles en una autopista concurrida). Al existir más caminos disponibles, la facilidad de paso global de la red aumenta, haciendo que la resistencia equivalente total sea estrictamente menor que la del camino individual más fácil.",
    resultado: "Porque cada rama añade un camino en paralelo, reduciendo la oposición total"
  },
  {
    id: "s11_4", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Análisis y Lógica", numero: 4,
    pregunta: "¿Qué es un divisor de voltaje y bajo qué tipo de conexión de resistores se fundamenta su principio de operación?",
    formula: "V_k = V_{\\text{fuente}} \\left(\\frac{R_k}{R_{\\text{eq}}}\\right)",
    desarrollo: "Un divisor de voltaje es un circuito diseñado para suministrar una fracción controlada y proporcional del voltaje de entrada. Su principio se fundamenta en una conexión de resistores en <strong>SERIE</strong>, dado que al circular la misma corriente por todos ellos, la caída de tensión en cada resistor es directamente proporcional a su propio valor de resistencia.",
    resultado: "Circuito para fraccionar voltaje; se fundamenta en conexión en SERIE"
  },
  {
    id: "s11_5", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Análisis y Lógica", numero: 5,
    pregunta: "Dispone de tres focos idénticos diseñados para operar a 110 V. Si los conecta en serie a una línea de 110 V, ¿iluminarán con la misma intensidad que si se conectaran en paralelo a la misma línea? Explique basándose en la potencia disipada.",
    formula: "P_s = \\frac{(V/3)^2}{R} = \\frac{V^2}{9R} = \\frac{1}{9} P_p",
    desarrollo: "<strong>No</strong>, iluminarán con una intensidad drásticamente inferior (1/9 de la potencia de cada foco en paralelo). En paralelo a $110\\text{ V}$, cada bombilla recibe los $110\\text{ V}$ completos y disipa su potencia nominal $P = V^2/R$. En serie a $110\\text{ V}$, el voltaje se reparte en tres partes iguales ($V/3 \\approx 36.7\\text{ V}$), por lo que la potencia disipada por cada bombilla se reduce a $P_s = (V/3)^2/R = P_p/9$ (apenas el $11.1\\%$ de su brillo nominal).",
    resultado: "No, iluminan muchísimo menos (cada foco disipa solo 1/9 de potencia)"
  },
  {
    id: "s11_6", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Desarrollo Matemático", numero: 6,
    pregunta: "Datos: Tres resistores de valores $10\\ \\Omega$, $20\\ \\Omega$ y $30\\ \\Omega$ se conectan en serie a una fuente ideal de $12\\text{ V}$. Calcule la resistencia equivalente y la corriente total del circuito.",
    formula: "R_{\\text{eq}} = R_1 + R_2 + R_3, \\quad I = \\frac{V}{R_{\\text{eq}}}",
    desarrollo: "Suma directa en serie:<br>$$R_{\\text{eq}} = 10 + 20 + 30 = 60.0\\ \\Omega$$<br>Corriente total:<br>$$I = \\frac{12.0\\text{ V}}{60.0\\ \\Omega} = 0.20\\text{ A} = 200\\text{ mA}$$",
    resultado: "$R_{\\text{eq}} = 60.0\\ \\Omega, \\quad I_{\\text{tot}} = 0.20\\text{ A} \\ (200\\text{ mA})$"
  },
  {
    id: "s11_7", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Desarrollo Matemático", numero: 7,
    pregunta: "Datos: Con los mismos resistores del problema anterior ($10\\ \\Omega$, $20\\ \\Omega$ y $30\\ \\Omega$), calcule la resistencia equivalente y la corriente total si se conectan en paralelo a la fuente de $12\\text{ V}$.",
    formula: "\\frac{1}{R_{\\text{eq}}} = \\frac{1}{10} + \\frac{1}{20} + \\frac{1}{30}, \\quad I = \\frac{V}{R_{\\text{eq}}}",
    desarrollo: "$$\\frac{1}{R_{\\text{eq}}} = \\frac{6 + 3 + 2}{60} = \\frac{11}{60}\\ \\Omega^{-1} \\implies R_{\\text{eq}} = \\frac{60}{11}\\ \\Omega \\approx 5.45\\ \\Omega$$<br>Corriente total:<br>$$I = \\frac{12.0\\text{ V}}{60/11\\ \\Omega} = \\frac{132}{60} = 2.20\\text{ A}$$<br>*(Por ramas: $I_{10} = 1.2\\text{ A}, I_{20} = 0.6\\text{ A}, I_{30} = 0.4\\text{ A}$; suma = $2.20\\text{ A}$)*.",
    resultado: "$R_{\\text{eq}} = 5.45\\ \\Omega \\ (60/11\\ \\Omega), \\quad I_{\\text{tot}} = 2.20\\text{ A}$"
  },
  {
    id: "s11_8", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Desarrollo Matemático", numero: 8,
    pregunta: "Datos: Para el circuito en serie del problema 6, calcule la caída de voltaje en el resistor de $20\\ \\Omega$ y la potencia disipada por este componente.",
    formula: "V_2 = I R_2, \\quad P_2 = I^2 R_2",
    desarrollo: "Con corriente en serie $I = 0.20\\text{ A}$:<br>&bull; Caída de potencial: $V_{20} = (0.20\\text{ A})(20\\ \\Omega) = 4.00\\text{ V}$<br>&bull; Potencia disipada: $P_{20} = (0.20\\text{ A})^2(20\\ \\Omega) = (0.04)(20) = 0.80\\text{ W} = 800\\text{ mW}$",
    resultado: "$V_{20} = 4.00\\text{ V}, \\quad P_{20} = 0.80\\text{ W} \\ (800\\text{ mW})$"
  },
  {
    id: "s11_9", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Desarrollo Matemático", numero: 9,
    pregunta: "Datos: En un circuito en paralelo con dos ramas ($R_1 = 15\\ \\Omega$ y $R_2$ desconocida), se sabe que la corriente total es de $5.0\\text{ A}$ y la corriente a través de $R_1$ es de $2.0\\text{ A}$. Determine el valor de $R_2$.",
    formula: "I_2 = I_{\\text{tot}} - I_1, \\quad V = I_1 R_1 = I_2 R_2",
    desarrollo: "Por Ley de Nodos de Kirchhoff:<br>$$I_2 = 5.0\\text{ A} - 2.0\\text{ A} = 3.0\\text{ A}$$<br>Voltaje común en paralelo:<br>$$V = (2.0\\text{ A})(15\\ \\Omega) = 30.0\\text{ V}$$<br>Resistencia desconocida:<br>$$R_2 = \\frac{30.0\\text{ V}}{3.0\\text{ A}} = 10.0\\ \\Omega$$",
    resultado: "$R_2 = 10.0\\ \\Omega$"
  },
  {
    id: "s11_10", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Desarrollo Matemático", numero: 10,
    pregunta: "Datos: Calcule la resistencia equivalente entre los terminales A y B de una red donde un resistor de $5.0\\ \\Omega$ está en serie con una combinación en paralelo de un resistor de $12\\ \\Omega$ y uno de $4.0\\ \\Omega$.",
    formula: "R_p = \\frac{12 \\times 4.0}{12 + 4.0}, \\quad R_{\\text{eq}} = 5.0 + R_p",
    desarrollo: "Resistencia del bloque en paralelo:<br>$$R_p = \\frac{48}{16} = 3.0\\ \\Omega$$<br>Resistencia total en serie:<br>$$R_{\\text{eq}} = 5.0\\ \\Omega + 3.0\\ \\Omega = 8.00\\ \\Omega$$",
    resultado: "$R_{\\text{eq}} = 8.00\\ \\Omega$"
  },
  {
    id: "s11_11", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Aplicación", numero: 11,
    pregunta: "Datos: Una serie de luces navideñas consta de 50 bombillas idénticas conectadas en serie a un tomacorriente de $120\\text{ V}$. Si la cadena consume una potencia total de $25\\text{ W}$, determine la resistencia operativa de cada bombilla individual.",
    formula: "R_{\\text{tot}} = \\frac{V^2}{P_{\\text{tot}}}, \\quad R_{\\text{bombilla}} = \\frac{R_{\\text{tot}}}{50}",
    desarrollo: "Resistencia equivalente total de la cadena en serie:<br>$$R_{\\text{tot}} = \\frac{120^2}{25} = \\frac{14,400}{25} = 576\\ \\Omega$$<br>Al estar 50 bombillas idénticas en serie:<br>$$R_{\\text{bombilla}} = \\frac{576\\ \\Omega}{50} = 11.52\\ \\Omega$$",
    resultado: "$R_{\\text{bombilla}} = 11.52\\ \\Omega$"
  },
  {
    id: "s11_12", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Aplicación", numero: 12,
    pregunta: "Datos: Un ingeniero de audio necesita acoplar un altavoz que requiere una impedancia (resistencia efectiva) exacta de $8.0\\ \\Omega$. Si solo dispone en stock de resistores de potencia de $16\\ \\Omega$, diseñe de manera sencilla la red requerida utilizando la menor cantidad de componentes posibles.",
    formula: "R_{\\text{eq}} = \\frac{16 \\times 16}{16 + 16} = 8.0\\ \\Omega",
    desarrollo: "Se conectan **dos resistores de $16\\ \\Omega$ en paralelo**.<br>$$R_{\\text{eq}} = \\frac{16}{2} = 8.0\\ \\Omega$$<br>Requiere un total mínimo de 2 componentes.",
    resultado: "2 resistores de $16\\ \\Omega$ conectados en paralelo"
  },
  {
    id: "s11_13", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Aplicación", numero: 13,
    pregunta: "Datos: El circuito electrónico de un sensor requiere un voltaje de referencia exacto de $3.0\\text{ V}$, pero la batería disponible en la placa es de $9.0\\text{ V}$. Utilizando un circuito divisor de voltaje con dos resistores en serie donde el resistor de salida es de $1,000\\ \\Omega$, determine el valor del otro resistor necesario para completar el diseño.",
    formula: "V_{\\text{out}} = V_{\\text{in}} \\left( \\frac{R_2}{R_1 + R_2} \\right)",
    desarrollo: "$$3.0 = 9.0 \\left( \\frac{1000}{R_1 + 1000} \\right) \\implies \\frac{3.0}{9.0} = \\frac{1}{3} = \\frac{1000}{R_1 + 1000}$$<br>$$R_1 + 1000 = 3000 \\implies R_1 = 2000\\ \\Omega = 2.0\\text{ k}\\Omega$$",
    resultado: "$R_1 = 2,000\\ \\Omega = 2.0\\text{ k}\\Omega$"
  },
  {
    id: "s11_14", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Aplicación", numero: 14,
    pregunta: "Datos: Un sistema de calefacción por suelo radiante residencial consta de 4 paneles resistivos idénticos. Cada panel tiene una resistencia de $48\\ \\Omega$. Si se conectan en paralelo a una línea de alimentación estándar de $240\\text{ V}$, calcule la corriente total de la instalación y verifique si un disyuntor de protección de $25\\text{ A}$ soportará la carga sin dispararse.",
    formula: "I_k = \\frac{V}{R_k}, \\quad I_{\\text{tot}} = 4 \\times I_k",
    desarrollo: "Corriente que consume cada panel:<br>$$I_{\\text{panel}} = \\frac{240\\text{ V}}{48\\ \\Omega} = 5.0\\text{ A}$$<br>Corriente total con 4 paneles en paralelo:<br>$$I_{\\text{tot}} = 4 \\times 5.0\\text{ A} = 20.0\\text{ A}$$<br>*(O bien: $R_{\\text{eq}} = 48/4 = 12\\ \\Omega \\implies I = 240/12 = 20.0\\text{ A}$)*.<br><br><strong>Verificación de protección:</strong> Dado que $20.0\\text{ A} < 25.0\\text{ A}$, el disyuntor **SÍ soportará la carga sin dispararse** (opera al $80\\%$ de su capacidad, cumpliendo además con la norma técnica de diseño para cargas continuas).",
    resultado: "$I_{\\text{tot}} = 20.0\\text{ A}$ | SÍ lo soportará ($20\\text{ A} < 25\\text{ A}$)"
  },
  {
    id: "s11_15", semana: 11, semanaTitle: "Circuitos de Resistores", categoria: "Aplicación", numero: 15,
    pregunta: "Datos: Un instrumento científico de laboratorio de alta precisión utiliza una red de tres derivaciones en paralelo para medir corrientes altas. Las resistencias son de $1.0\\ \\Omega$, $2.0\\ \\Omega$ y $0.5\\ \\Omega$. Si por un error de calibración la resistencia de $0.5\\ \\Omega$ se desconecta accidentalmente del circuito mientras circula una corriente total constante de $3.5\\text{ A}$, determine el cambio porcentual en la resistencia equivalente de la red de medición.",
    formula: "\\% \\Delta R = \\left( \\frac{R_{\\text{eq2}} - R_{\\text{eq1}}}{R_{\\text{eq1}}} \\right) \\times 100\\%",
    desarrollo: "1. <strong>Resistencia equivalente inicial ($R_{\\text{eq1}}$):</strong><br>$$\\frac{1}{R_{\\text{eq1}}} = \\frac{1}{1.0} + \\frac{1}{2.0} + \\frac{1}{0.5} = 1.0 + 0.5 + 2.0 = 3.5 = \\frac{7}{2}\\ \\Omega^{-1} \\implies R_{\\text{eq1}} = \\frac{2}{7}\\ \\Omega \\approx 0.2857\\ \\Omega$$<br>2. <strong>Resistencia equivalente final ($R_{\\text{eq2}}$) sin la rama de $0.5\\ \\Omega$:</strong><br>$$\\frac{1}{R_{\\text{eq2}}} = \\frac{1}{1.0} + \\frac{1}{2.0} = 1.5 = \\frac{3}{2}\\ \\Omega^{-1} \\implies R_{\\text{eq2}} = \\frac{2}{3}\\ \\Omega \\approx 0.6667\\ \\Omega$$<br>3. <strong>Cambio porcentual:</strong><br>$$\\% \\Delta R = \\frac{\\frac{2}{3} - \\frac{2}{7}}{\\frac{2}{7}} \\times 100\\% = \\frac{\\frac{8}{21}}{\\frac{2}{7}} \\times 100\\% = \\left(\\frac{8 \\times 7}{21 \\times 2}\\right) \\times 100\\% = \\frac{4}{3} \\times 100\\% = +133.33\\%$$",
    resultado: "+133.33% de incremento en la resistencia equivalente (pasa de 0.2857 $\\Omega$ a 0.6667 $\\Omega$)"
  }
];

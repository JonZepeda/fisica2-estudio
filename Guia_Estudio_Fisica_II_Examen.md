# GUÍA MAESTRA DE ESTUDIO Y SOLUCIONARIO COMPLETO: FÍSICA II
**Examen de Electromagnetismo y Circuitos (Semanas 7 a 11)**  
*Basado en los folletos de lectura Serway-Jewett (Capítulos 24, 25 y 26) y la Hoja de Trabajo Oficial.*

---

## PARTE 1: FORMULARIO MAESTRO DE EXAMEN

### 1. Constantes Físicas Fundamentales
* **Permitividad del vacío**: $\epsilon_0 = 8.854 \times 10^{-12} \text{ F/m} \quad (\text{o } \text{C}^2 / (\text{N}\cdot\text{m}^2))$
* **Constante de Coulomb**: $k_e = \frac{1}{4\pi\epsilon_0} \approx 8.988 \times 10^9 \text{ N}\cdot\text{m}^2/\text{C}^2$
* **Carga elemental del protón / electrón**: $e = 1.602 \times 10^{-19} \text{ C}$
* **Masa del protón**: $m_p = 1.673 \times 10^{-27} \text{ kg}$
* **Masa del electrón**: $m_e = 9.109 \times 10^{-31} \text{ kg}$
* **Equivalencia electrón-volt**: $1 \text{ eV} = 1.602 \times 10^{-19} \text{ J}$
* **Equivalencia de energía eléctrica**: $1 \text{ kWh} = 3.6 \times 10^6 \text{ J} = 3.6 \text{ MJ}$

---

### 2. Semana 7: Potencial Eléctrico y Distribuciones de Carga (Capítulo 24)
* **Diferencia de Potencial General**:
  $$\Delta V = V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{s} = \frac{\Delta U_E}{q}$$
* **Trabajo realizado por el Campo Eléctrico vs. Agente Externo**:
  $$W_{\text{campo}} = -\Delta U_E = -q \Delta V$$
  $$W_{\text{ext}} = +\Delta U_E = q \Delta V \quad (\text{a velocidad constante})$$
* **Campo Eléctrico Uniforme**:
  $$\Delta V = -E d \implies E = \frac{|\Delta V|}{d}$$
* **Conservación de la Energía Mecánica para Partículas Cargadas**:
  $$\Delta K + \Delta U_E = 0 \implies \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2 = -q \Delta V$$
* **Potencial de una Carga Puntual (con referencia $V(\infty) = 0$)**:
  $$V = k_e \frac{q}{r}$$
* **Superposición de Cargas Puntuales**:
  $$V = k_e \sum_i \frac{q_i}{r_i}$$
* **Energía Potencial de un Sistema de Cargas**:
  $$U_E = k_e \sum_{i < j} \frac{q_i q_j}{r_{ij}}$$
* **Obtención del Campo Eléctrico a partir del Potencial**:
  $$\vec{E} = -\nabla V = -\left( \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k} \right)$$
  En una dimensión: $E_x = -\frac{dV}{dx}$; Simetría esférica: $E_r = -\frac{dV}{dr}$.
* **Potencial de Distribuciones Continuas**:
  $$V = k_e \int \frac{dq}{r}$$
  * **Anillo de radio $R$ sobre su eje a distancia $x$**:
    $$V(x) = \frac{k_e Q}{\sqrt{R^2 + x^2}}, \quad E_x = \frac{k_e Q x}{(R^2 + x^2)^{3/2}}$$
  * **Disco de radio $R$ y densidad $\sigma$ sobre su eje a distancia $x$**:
    $$V(x) = 2\pi k_e \sigma \left(\sqrt{R^2 + x^2} - x\right)$$
  * **Varilla finita de longitud $L$ con densidad $\lambda$ a lo largo de su eje a distancia $d$ de un extremo**:
    $$V = k_e \lambda \ln\left(\frac{L + d}{d}\right)$$
  * **Esfera conductora de radio $R$ con carga $Q$**:
    * Para $r \ge R$: $V(r) = k_e \frac{Q}{r}, \quad E(r) = k_e \frac{Q}{r^2} \implies V_{\text{superficie}} = E_{\text{superficie}} \cdot R$
    * Para $r < R$: $V(r) = k_e \frac{Q}{R} = \text{constante}, \quad E = 0$

---

### 3. Semana 8: Capacitancia y Dieléctricos (Capítulo 25)
* **Definición de Capacitancia**:
  $$C = \frac{Q}{\Delta V} \quad [1\text{ F} = 1\text{ C/V}]$$
* **Capacitancia según la Geometría (en vacío o aire)**:
  * **Placas Paralelas**: $C_0 = \frac{\epsilon_0 A}{d}$
  * **Esfera Conductora Aislada**: $C = 4\pi\epsilon_0 R = \frac{R}{k_e}$
  * **Capacitor Esférico Concéntrico (radios $a$ y $b$)**: $C = \frac{a b}{k_e (b - a)} = 4\pi\epsilon_0 \frac{a b}{b - a}$
  * **Capacitor Cilíndrico Coaxial (radios $a$ y $b$, longitud $L$)**: $C = \frac{L}{2 k_e \ln(b/a)} = \frac{2\pi \epsilon_0 L}{\ln(b/a)}$
* **Energía Almacenada en un Capacitor**:
  $$U_E = \frac{Q^2}{2C} = \frac{1}{2} Q \Delta V = \frac{1}{2} C (\Delta V)^2$$
* **Densidad de Energía en el Campo Eléctrico**:
  $$u_E = \frac{U_E}{\text{Volumen}} = \frac{1}{2}\epsilon_0 E^2 \quad [\text{J/m}^3]$$
* **Efecto de un Material Dieléctrico (Constante $\kappa$)**:
  $$C = \kappa C_0$$
  * **Desconectado de la Batería ($Q = \text{constante}$)**:
    $$\Delta V = \frac{\Delta V_0}{\kappa}, \quad E = \frac{E_0}{\kappa}, \quad U = \frac{U_0}{\kappa}$$
  * **Conectado a la Batería ($\Delta V = \text{constante}$)**:
    $$Q = \kappa Q_0, \quad E = E_0, \quad U = \kappa U_0$$
* **Rigidez Dieléctrica y Voltaje Máximo**:
  $$\Delta V_{\text{max}} = E_{\text{max}} \cdot d$$
  *Con factor de seguridad $FS$: $E_{\text{diseño}} = FS \cdot E_{\text{max}}$.*
* **Dipolo Eléctrico en Campo Externo**:
  * Momento dipolar: $\vec{p} = q (2\vec{a})$ (apunta de $-q$ a $+q$)
  * Torque / Momento de torsión: $\vec{\tau} = \vec{p} \times \vec{E} \implies \tau = p E \operatorname{sen}\theta$
  * Energía potencial rotacional: $U = -\vec{p} \cdot \vec{E} = -p E \cos\theta$

---

### 4. Semana 9: Circuitos de Capacitores (Capítulo 25)
* **Capacitores en Paralelo**:
  * Voltaje común: $\Delta V_1 = \Delta V_2 = \Delta V_{\text{total}}$
  * Carga total: $Q_{\text{total}} = Q_1 + Q_2 + \dots$
  * Capacitancia equivalente:
    $$C_{\text{eq}} = C_1 + C_2 + C_3 + \dots$$
* **Capacitores en Serie**:
  * Carga común: $Q_1 = Q_2 = Q_{\text{total}}$
  * Voltaje total: $\Delta V_{\text{total}} = \Delta V_1 + \Delta V_2 + \dots$
  * Capacitancia equivalente:
    $$\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + \dots$$
  * *Para dos capacitores en serie*: $C_{\text{eq}} = \frac{C_1 C_2}{C_1 + C_2}$
* **Redistribución de Carga en Conexión Paralelo**:
  $$Q_{\text{total}} = Q_{1i} + Q_{2i} = C_1 V_i + 0$$
  $$V_f = \frac{Q_{\text{total}}}{C_1 + C_2}$$

---

### 5. Semana 10: Corriente, Resistencia y Ley de Ohm (Capítulo 26)
* **Corriente Eléctrica**:
  $$I_{\text{prom}} = \frac{\Delta Q}{\Delta t}, \quad I = \frac{dQ}{dt} \implies Q = \int I(t) dt \quad [1\text{ A} = 1\text{ C/s}]$$
* **Densidad de Corriente y Modelo Microscópico de Drude**:
  $$J = \frac{I}{A} = n q v_d \quad [\text{A/m}^2]$$
  Donde:
  * $n = \frac{N_A \rho_{\text{masa}}}{M}$ (densidad de portadores por unidad de volumen)
  * $v_d$: velocidad de arrastre o deriva
* **Ley de Ohm y Resistencia**:
  * Forma microscópica: $\vec{J} = \sigma \vec{E} = \frac{1}{\rho} \vec{E}$
  * Forma macroscópica: $\Delta V = I R \implies R = \frac{\Delta V}{I} \quad [1\ \Omega = 1\text{ V/A}]$
* **Resistencia de un Conductor Cilíndrico Uniforme**:
  $$R = \rho \frac{\ell}{A} = \rho \frac{\ell}{\pi r^2}$$
* **Variación de la Resistencia con la Temperatura**:
  $$\rho(T) = \rho_0 [1 + \alpha (T - T_0)]$$
  $$R(T) = R_0 [1 + \alpha (T - T_0)]$$
  Donde $\alpha$ es el coeficiente térmico de resistividad $[^\circ\text{C}^{-1}]$.
* **Potencia Eléctrica Disipada (Efecto Joule)**:
  $$P = I \Delta V = I^2 R = \frac{(\Delta V)^2}{R} \quad [1\text{ W} = 1\text{ J/s}]$$
* **Energía Eléctrica Consumida**:
  $$E = P \cdot \Delta t \quad [\text{en Joules o en kWh}]$$

---

### 6. Semana 11: Circuitos de Resistores (Capítulo 26 y 27)
* **Resistores en Serie**:
  * Corriente común: $I_1 = I_2 = I_{\text{total}}$
  * Caída de voltaje total: $\Delta V_{\text{total}} = \Delta V_1 + \Delta V_2 + \dots$
  * Resistencia equivalente:
    $$R_{\text{eq}} = R_1 + R_2 + R_3 + \dots$$
  * **Regla del Divisor de Voltaje**:
    $$V_k = V_{\text{fuente}} \left( \frac{R_k}{R_{\text{eq}}} \right)$$
* **Resistores en Paralelo**:
  * Voltaje común: $\Delta V_1 = \Delta V_2 = \Delta V_{\text{fuente}}$
  * Corriente total: $I_{\text{total}} = I_1 + I_2 + \dots$
  * Resistencia equivalente:
    $$\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots$$
  * *Para dos resistores en paralelo*: $R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2}$
  * **Regla del Divisor de Corriente (2 ramas)**:
    $$I_1 = I_{\text{total}} \left( \frac{R_2}{R_1 + R_2} \right), \quad I_2 = I_{\text{total}} \left( \frac{R_1}{R_1 + R_2} \right)$$

---

### TABLA COMPARATIVA DIRECTA: CAPACITORES VS. RESISTORES

| Criterio | Capacitores ($C$) | Resistores ($R$) |
| :--- | :--- | :--- |
| **Ley Fundamental** | $Q = C \Delta V$ | $\Delta V = I R$ |
| **Conexión en Serie** | Carga idéntica ($Q$ igual)<br>$\frac{1}{C_{\text{eq}}} = \sum \frac{1}{C_i}$ ($C_{\text{eq}}$ disminuye) | Corriente idéntica ($I$ igual)<br>$R_{\text{eq}} = \sum R_i$ ($R_{\text{eq}}$ aumenta) |
| **Conexión en Paralelo** | Voltaje idéntico ($\Delta V$ igual)<br>$C_{\text{eq}} = \sum C_i$ ($C_{\text{eq}}$ aumenta) | Voltaje idéntico ($\Delta V$ igual)<br>$\frac{1}{R_{\text{eq}}} = \sum \frac{1}{R_i}$ ($R_{\text{eq}}$ disminuye) |
| **Falla en Abierto** | $C_{\text{eq}} = 0$ (en serie) | Corriente se interrumpe ($I = 0$ en serie) |
| **Falla en Cortocircuito** | Descarga total de la red en paralelo | Sobrecorriente extrema de la fuente |
| **Energía / Potencia** | Almacena energía: $U = \frac{1}{2} C V^2$ | Disipa energía (calor): $P = \frac{V^2}{R} = I^2 R$ |

---

## PARTE 2: SOLUCIONARIO COMPLETO Y DETALLADO DE LA HOJA DE TRABAJO

---

### SEMANA 7: Potencial Eléctrico de Cargas Puntuales y Distribuciones Continuas

#### Análisis y Lógica
1. **Si el potencial eléctrico es constante en una región del espacio, ¿qué se puede afirmar sobre el campo eléctrico en esa misma región? Explique.**
   * **Respuesta**: El campo eléctrico es **exactamente cero** ($\vec{E} = 0$) en toda esa región.
   * **Explicación**: El campo eléctrico se relaciona con el potencial como el gradiente negativo del potencial: $\vec{E} = -\nabla V = -\left( \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k} \right)$. Si $V(x, y, z)$ es constante, sus derivadas espaciales respecto a cualquier coordenada son idénticamente nulas. Por lo tanto, no existe campo eléctrico.

2. **Dos cargas puntuales de igual magnitud pero signos opuestos están separadas por una distancia $d$. ¿Existe algún punto en la línea que las une donde el potencial sea cero pero el campo eléctrico no lo sea? Justifique.**
   * **Respuesta**: **Sí**, existe, y se encuentra exactamente en el **punto medio** entre ambas cargas (a distancia $d/2$ de cada una).
   * **Justificación**:
     * *Potencial eléctrico (escalar)*: $V = k_e \frac{+q}{d/2} + k_e \frac{-q}{d/2} = \frac{2k_e q}{d} - \frac{2k_e q}{d} = 0\text{ V}$.
     * *Campo eléctrico (vectorial)*: El campo creado por $+q$ apunta alejándose de $+q$ (hacia $-q$). El campo creado por $-q$ apunta hacia $-q$ (en el mismo sentido). Ambos vectores se suman en la misma dirección: $E_{\text{neto}} = k_e \frac{q}{(d/2)^2} + k_e \frac{q}{(d/2)^2} = \frac{8 k_e q}{d^2} \neq 0$. Por ende, el potencial es nulo pero el campo eléctrico es máximo y no nulo.

3. **Al moverse en la dirección de las líneas de campo eléctrico, ¿el potencial eléctrico aumenta, disminuye o se mantiene igual?**
   * **Respuesta**: **Disminuye**.
   * **Justificación**: La relación es $\Delta V = -\int \vec{E} \cdot d\vec{s}$. Si el desplazamiento $d\vec{s}$ es paralelo y en el mismo sentido que $\vec{E}$, el producto escalar $\vec{E} \cdot d\vec{s} > 0$, lo que implica que $\Delta V < 0$ ($V_{\text{final}} < V_{\text{inicial}}$). Las líneas de campo eléctrico siempre apuntan hacia la dirección de potencial eléctrico decreciente.

4. **Explique por qué la superficie de un conductor cargado en equilibrio electrostático es siempre una superficie equipotencial.**
   * **Respuesta**: Porque el campo eléctrico tangencial a la superficie es nulo.
   * **Justificación**: Si existiera una componente tangencial del campo eléctrico $E_t$ sobre la superficie, los electrones libres del conductor experimentarían una fuerza eléctrica $F_t = -e E_t$ y se acelerarían a lo largo de la superficie, lo que violaría la condición de equilibrio electrostático. Como $E_t = 0$, la integral de línea entre dos puntos cualesquiera $A$ y $B$ de la superficie es $\Delta V = -\int_A^B E_t ds = 0 \implies V_A = V_B$. Por tanto, toda la superficie está al mismo potencial eléctrico.

5. **Si una distribución de carga continua tiene simetría esférica, ¿cómo varía el potencial eléctrico fuera de la distribución en comparación con una carga puntual?**
   * **Respuesta**: Varía de manera **completamente idéntica** al de una carga puntual de magnitud igual a la carga neta total $Q$ concentrada en el centro.
   * **Justificación**: Por la Ley de Gauss, para cualquier radio $r \ge R_{\text{ext}}$, el campo eléctrico exterior es radial y de magnitud $E(r) = k_e \frac{Q}{r^2}$. Integrando desde el infinito hasta la distancia $r$: $V(r) = -\int_\infty^r E(r') dr' = k_e \frac{Q}{r}$, que es la fórmula exacta para una carga puntual.

---

#### Desarrollo Matemático
6. **Cargas puntuales $q_1 = +3.0\ \mu\text{C}$ en $(0, 3)\text{ m}$ y $q_2 = -4.0\ \mu\text{C}$ en $(4, 0)\text{ m}$. Calcule el potencial total en el origen $(0,0)$.**
   * Distancia de $q_1$ al origen: $r_1 = \sqrt{(0-0)^2 + (3-0)^2} = 3.0\text{ m}$.
   * Distancia de $q_2$ al origen: $r_2 = \sqrt{(4-0)^2 + (0-0)^2} = 4.0\text{ m}$.
   * Principio de superposición escalar:
     $$V_{(0,0)} = k_e \left( \frac{q_1}{r_1} + \frac{q_2}{r_2} \right) = (8.988 \times 10^9) \left( \frac{3.0 \times 10^{-6}\text{ C}}{3.0\text{ m}} + \frac{-4.0 \times 10^{-6}\text{ C}}{4.0\text{ m}} \right)$$
     $$V_{(0,0)} = (8.988 \times 10^9) \left( 1.0 \times 10^{-6} - 1.0 \times 10^{-6} \right) = \mathbf{0.00\text{ V}}$$

7. **Carga $q = +5.0\text{ nC}$ se mueve desde $V_A = 100\text{ V}$ hasta $V_B = 250\text{ V}$. Calcule el trabajo realizado por el campo eléctrico.**
   * El trabajo del campo eléctrico es el negativo de la variación de energía potencial:
     $$W_{\text{campo}} = -\Delta U_E = -q (V_B - V_A)$$
     $$W_{\text{campo}} = -(5.0 \times 10^{-9}\text{ C})(250\text{ V} - 100\text{ V}) = -(5.0 \times 10^{-9}\text{ C})(150\text{ V}) = \mathbf{-7.50 \times 10^{-7}\text{ J}} = \mathbf{-0.75\ \mu\text{J}}$$
   *(Nota: Es negativo porque la carga positiva se mueve contra las líneas de campo hacia un potencial mayor).*

8. **Anillo de radio $R = 0.5\text{ m}$ con carga total $Q = +12\ \mu\text{C}$ distribuida uniformemente. Deduzca y calcule el potencial sobre el eje a distancia $x = 1.2\text{ m}$ de su centro.**
   * **Deducción**: Todo elemento de carga $dq$ del anillo equidista del punto axial $P$, con distancia $r = \sqrt{R^2 + x^2}$.
     $$V = k_e \int \frac{dq}{r} = \frac{k_e}{\sqrt{R^2 + x^2}} \int dq = \frac{k_e Q}{\sqrt{R^2 + x^2}}$$
   * **Cálculo**:
      * $r = \sqrt{(0.5)^2 + (1.2)^2} = \sqrt{0.25 + 1.44} = \sqrt{1.69} = 1.30\text{ m}$.
      $$V = \frac{(8.99 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2)(12.0 \times 10^{-6}\text{ C})}{1.30\text{ m}} = \frac{107,880}{1.30} = \mathbf{82,984.6\text{ V}} \approx \mathbf{82.98\text{ kV}}$$

9. **Potencial $V(x, y) = 3x^2y - 5x$. Calcule el vector campo eléctrico $\vec{E}$ en $(1, 2)\text{ m}$.**
   * Componentes del campo mediante derivadas parciales:
     $$E_x = -\frac{\partial V}{\partial x} = -\frac{\partial}{\partial x}(3x^2y - 5x) = -(6xy - 5) = -6xy + 5$$
     $$E_y = -\frac{\partial V}{\partial y} = -\frac{\partial}{\partial y}(3x^2y - 5x) = -3x^2$$
     $$E_z = -\frac{\partial V}{\partial z} = 0$$
   * Evaluando en el punto $(x = 1\text{ m}, y = 2\text{ m})$:
     $$E_x = -6(1)(2) + 5 = -12 + 5 = -7.0\text{ V/m}$$
     $$E_y = -3(1)^2 = -3.0\text{ V/m}$$
   * **Vector Campo Eléctrico**:
     $$\vec{E}(1, 2) = \mathbf{(-7.0\hat{i} - 3.0\hat{j})\text{ V/m}}$$
     *Magnitud*: $|\vec{E}| = \sqrt{(-7)^2 + (-3)^2} = \sqrt{58} \approx \mathbf{7.62\text{ V/m}}$

10. **Varilla delgada de longitud $L = 2.0\text{ m}$ con $\lambda = +4.0\ \mu\text{C/m}$. Calcule el potencial a distancia $d = 0.5\text{ m}$ de un extremo a lo largo de su eje.**
    * Colocando el punto de observación en el origen $x = 0$, la varilla se extiende desde $x = d = 0.5\text{ m}$ hasta $x = d + L = 2.5\text{ m}$.
    * Elemento de carga: $dq = \lambda dx$ a distancia $x$ del origen.
    * Integración:
      $$V = k_e \int_{d}^{d+L} \frac{\lambda dx}{x} = k_e \lambda \left[ \ln x \right]_{d}^{d+L} = k_e \lambda \ln\left( \frac{d + L}{d} \right)$$
      $$\frac{d + L}{d} = \frac{0.5 + 2.0}{0.5} = \frac{2.5}{0.5} = 5.0$$
      $$V = (8.99 \times 10^9)(4.0 \times 10^{-6}) \ln(5.0) = 35,960 \times 1.609438 = \mathbf{57,875.4\text{ V}} \approx \mathbf{57.88\text{ kV}}$$

---

#### Aplicación
11. **Protón ($q = 1.6 \times 10^{-19}\text{ C}, m = 1.67 \times 10^{-27}\text{ kg}$) acelerado desde el reposo con $\Delta V = 15,000\text{ V}$. Calcule la velocidad final.**
    * Por conservación de energía: $\Delta K + \Delta U = 0 \implies \frac{1}{2} m v^2 = q \Delta V$.
      $$v = \sqrt{\frac{2 q \Delta V}{m}} = \sqrt{\frac{2(1.60 \times 10^{-19}\text{ C})(15,000\text{ V})}{1.67 \times 10^{-27}\text{ kg}}} = \sqrt{\frac{4.80 \times 10^{-15}}{1.67 \times 10^{-27}}} = \sqrt{2.874 \times 10^{12}} = \mathbf{1.69 \times 10^6\text{ m/s}} \ (1,695\text{ km/s})$$

12. **Esfera conductora de Van de Graaff de radio $R = 0.15\text{ m}$. Ruptura del aire a $E_{\text{máx}} = 3.0 \times 10^6\text{ V/m}$. Calcule el potencial máximo.**
    * En la superficie de una esfera conductora: $E_{\text{sup}} = \frac{k_e Q}{R^2}$ y $V_{\text{sup}} = \frac{k_e Q}{R}$.
    * Relación directa:
      $$V_{\text{máx}} = E_{\text{máx}} \cdot R = (3.0 \times 10^6\text{ V/m})(0.15\text{ m}) = \mathbf{450,000\text{ V}} = \mathbf{450\text{ kV}}$$

13. **Tubo de rayos catódicos con placas separadas $d = 2.0\text{ cm} = 0.02\text{ m}$ y $\Delta V = 400\text{ V}$. Módulo del campo eléctrico uniforme.**
    $$E = \frac{\Delta V}{d} = \frac{400\text{ V}}{0.02\text{ m}} = \mathbf{20,000\text{ V/m}} = \mathbf{2.0 \times 10^4\text{ V/m}}$$

14. **Esfera conductora hueca con radio interno $R_1 = 10\text{ cm}$ y externo $R_2 = 15\text{ cm} = 0.15\text{ m}$ con carga central de $+2.0\ \mu\text{C}$. Potencial en la superficie exterior.**
    * La carga central induce $-q$ en el interior y $+q$ en la superficie externa. Para todo punto $r \ge R_2$, el campo es el de una carga puntual $+q$ en el origen.
    * Con referencia $V(\infty) = 0$:
      $$V(R_2) = \frac{k_e q}{R_2} = \frac{(8.99 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2)(2.0 \times 10^{-6}\text{ C})}{0.15\text{ m}} = \frac{17,980}{0.15} = \mathbf{119,866.7\text{ V}} \approx \mathbf{120\text{ kV}}$$

15. **Línea de ensamblaje: potencial no debe superar $50\text{ V}$ a $r = 10\text{ cm} = 0.10\text{ m}$. Calcule la carga puntual máxima permitida.**
    $$V = \frac{k_e q_{\text{máx}}}{r} \implies q_{\text{máx}} = \frac{V \cdot r}{k_e} = \frac{(50\text{ V})(0.10\text{ m})}{8.988 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2} = \mathbf{5.56 \times 10^{-10}\text{ C}} = \mathbf{0.556\text{ nC}} = \mathbf{556\text{ pC}}$$

---

### SEMANA 8: Capacitancia y Materiales Dieléctricos

#### Análisis y Lógica
1. **Si se duplica la carga neta de un capacitor, ¿qué ocurre con su capacitancia? Explique.**
   * **Respuesta**: La capacitancia **permanece constante (no cambia)**.
   * **Explicación**: La capacitancia $C$ es una propiedad geométrica del capacitor (depende únicamente del área de las placas, su separación, la forma y el material dieléctrico, como $C = \epsilon_0 A/d$). Si se duplica la carga $Q$, la diferencia de potencial $\Delta V$ también se duplica de manera directamente proporcional, manteniendo constante la razón $C = Q/\Delta V$.

2. **Un capacitor de placas paralelas se conecta a una batería y luego se desconecta. Si las placas se separan más, ¿qué sucede con la energía almacenada? ¿De dónde proviene ese cambio de energía?**
   * **Respuesta**: La energía almacenada **aumenta**.
   * **Explicación**: Al desconectar la batería, la carga $Q$ permanece atrapada y constante. Al aumentar la distancia de separación $d$, la capacitancia disminuye ($C = \epsilon_0 A/d$). La energía electrostática está dada por $U = \frac{Q^2}{2C}$; por lo tanto, al disminuir $C$, $U$ se incrementa. Este aumento de energía proviene del **trabajo mecánico positivo** realizado por la fuerza externa para separar las placas en contra de la fuerza de atracción electrostática atractiva entre placas con cargas opuestas.

3. **Explique físicamente por qué la inserción de un material dieléctrico aumenta la capacitancia de un capacitor.**
   * **Respuesta**: Al colocarse en el campo eléctrico entre placas, los dipolos moleculares del dieléctrico se orientan (polarización), creando densidades de carga superficial inducida $\sigma_{\text{ind}}$ de signo opuesto al de las placas. Esto genera un campo eléctrico inducido interno $E_{\text{ind}}$ opuesto al campo externo, reduciendo el campo neto a $E = E_0/\kappa$. Al ser el campo menor, la diferencia de potencial entre placas se reduce a $\Delta V = \Delta V_0/\kappa$. Como $C = Q/\Delta V$, para una misma carga $Q$, una disminución en el voltaje se traduce en un incremento en la capacitancia en un factor $\kappa$: $C = \kappa C_0$.

4. **Dos capacitores idénticos se cargan a la misma diferencia de potencial. Al primero se le introduce un dieléctrico ($\kappa > 1$) conectado a la batería, y al segundo desconectado de la batería. ¿Cuál almacena más energía final?**
   * **Respuesta**: El **primer capacitor** (el que permanece conectado a la batería) almacena más energía.
   * **Justificación**:
     * *Capacitor 1 (Conectado, $\Delta V = \text{cte}$)*: $U_1 = \frac{1}{2} C_1 (\Delta V)^2 = \frac{1}{2} (\kappa C_0) (\Delta V)^2 = \kappa U_0$ (su energía aumenta).
     * *Capacitor 2 (Desconectado, $Q = \text{cte}$)*: $U_2 = \frac{Q^2}{2 C_2} = \frac{Q^2}{2(\kappa C_0)} = \frac{U_0}{\kappa}$ (su energía disminuye).
     * Como $\kappa > 1$, se cumple que $U_1 = \kappa^2 U_2 > U_2$.

5. **¿Qué es la rigidez dieléctrica de un material y qué relación tiene con el voltaje máximo de operación de un capacitor?**
   * **Respuesta**: La rigidez dieléctrica es el valor máximo del campo eléctrico que el aislante puede soportar antes de sufrir ionización y descarga eléctrica destructiva (ruptura dieléctrica).
   * **Relación**: El voltaje de operación máximo admisible $\Delta V_{\text{máx}}$ para una separación entre placas $d$ está dado por:
     $$\Delta V_{\text{máx}} = E_{\text{ruptura}} \cdot d$$

---

#### Desarrollo Matemático
6. **Capacitor de placas paralelas con área $A = 0.04\text{ m}^2$ y separación $d = 1.0\text{ mm} = 1.0 \times 10^{-3}\text{ m}$. Calcule su capacitancia en el vacío.**
   $$C_0 = \frac{\epsilon_0 A}{d} = \frac{(8.854 \times 10^{-12}\text{ F/m})(0.04\text{ m}^2)}{1.0 \times 10^{-3}\text{ m}} = \mathbf{3.54 \times 10^{-10}\text{ F}} = \mathbf{354\text{ pF}} = \mathbf{0.354\text{ nF}}$$

7. **Capacitor esférico de radios concéntricos $a = 5.0\text{ cm} = 0.05\text{ m}$ y $b = 8.0\text{ cm} = 0.08\text{ m}$. Calcule su capacitancia.**
   $$C = \frac{a b}{k_e (b - a)} = \frac{(0.05\text{ m})(0.08\text{ m})}{(8.988 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2)(0.08 - 0.05\text{ m})}$$
   $$C = \frac{0.0040}{(8.988 \times 10^9)(0.03)} = \frac{0.0040}{2.6964 \times 10^8} \approx \mathbf{1.48 \times 10^{-11}\text{ F}} = \mathbf{14.8\text{ pF}}$$

8. **Capacitor de $10\ \mu\text{F}$ conectado a $12\text{ V}$. Calcule la energía total almacenada.**
   $$U_E = \frac{1}{2} C (\Delta V)^2 = \frac{1}{2} (10.0 \times 10^{-6}\text{ F})(12.0\text{ V})^2 = 0.5 \times 10^{-5} \times 144 = \mathbf{7.20 \times 10^{-4}\text{ J}} = \mathbf{0.72\text{ mJ}} = \mathbf{720\ \mu\text{J}}$$

9. **Dieléctrico de $\kappa = 3.5$ en capacitor de $C_0 = 250\text{ pF}$ con carga constante $Q = 5.0\text{ nC}$. Calcule el nuevo voltaje.**
   * Voltaje inicial sin dieléctrico:
     $$\Delta V_0 = \frac{Q}{C_0} = \frac{5.0 \times 10^{-9}\text{ C}}{250 \times 10^{-12}\text{ F}} = 20.0\text{ V}$$
   * Con carga constante, al introducir el dieléctrico:
     $$\Delta V = \frac{\Delta V_0}{\kappa} = \frac{20.0\text{ V}}{3.5} \approx \mathbf{5.71\text{ V}}$$

10. **Capacitor cilíndrico de radio interno $a = 1.0\text{ mm} = 0.001\text{ m}$, radio externo $b = 3.0\text{ mm} = 0.003\text{ m}$ y longitud $L = 0.5\text{ m}$ en aire. Calcule la capacitancia.**
    $$C = \frac{2\pi \epsilon_0 L}{\ln(b/a)} = \frac{L}{2 k_e \ln(b/a)}$$
    $$\frac{b}{a} = \frac{3.0}{1.0} = 3.0 \implies \ln(3.0) \approx 1.09861$$
    $$C = \frac{0.50\text{ m}}{2(8.988 \times 10^9)(1.09861)} = \frac{0.50}{1.9748 \times 10^{10}} \approx \mathbf{2.53 \times 10^{-11}\text{ F}} = \mathbf{25.3\text{ pF}}$$

---

#### Aplicación
11. **Desfibrilador médico almacena $400\text{ J}$ a $2,000\text{ V}$. Calcule la capacitancia requerida.**
    $$U = \frac{1}{2} C (\Delta V)^2 \implies C = \frac{2 U}{(\Delta V)^2} = \frac{2(400\text{ J})}{(2000\text{ V})^2} = \frac{800}{4.0 \times 10^6} = \mathbf{2.00 \times 10^{-4}\text{ F}} = \mathbf{200\ \mu\text{F}}$$

12. **Tecla de teclado: $A = 0.5\text{ cm}^2 = 5.0 \times 10^{-5}\text{ m}^2$. Separación cambia de $d_1 = 1.2\text{ mm}$ a $d_2 = 0.4\text{ mm}$. Calcule el cambio de capacitancia $\Delta C$.**
    $$C_1 = \frac{\epsilon_0 A}{d_1} = \frac{(8.85 \times 10^{-12})(5.0 \times 10^{-5})}{1.2 \times 10^{-3}} \approx 0.3688\text{ pF}$$
    $$C_2 = \frac{\epsilon_0 A}{d_2} = \frac{(8.85 \times 10^{-12})(5.0 \times 10^{-5})}{0.4 \times 10^{-3}} \approx 1.1063\text{ pF}$$
    $$\Delta C = C_2 - C_1 = 1.1063\text{ pF} - 0.3688\text{ pF} = \mathbf{0.737\text{ pF}} = \mathbf{7.37 \times 10^{-13}\text{ F}}$$

13. **Capacitor con papel encerado ($\kappa = 2.5$, rigidez $15 \times 10^6\text{ V/m}$) de espesor $d = 0.1\text{ mm} = 1.0 \times 10^{-4}\text{ m}$. Factor de seguridad del 50%. Voltaje máximo seguro.**
    * Rigidez segura: $E_{\text{seguro}} = 0.50 \times (15.0 \times 10^6\text{ V/m}) = 7.50 \times 10^6\text{ V/m}$.
    $$V_{\text{máx, seguro}} = E_{\text{seguro}} \cdot d = (7.50 \times 10^6\text{ V/m})(1.0 \times 10^{-4}\text{ m}) = \mathbf{750\text{ V}}$$

14. **Sensor de humedad poroso: $C_0 = 100\text{ pF}$ seco ($\kappa_{\text{aire}} \approx 1$). Inundado al 10% con agua pura ($\kappa_{\text{agua}} \approx 80$). Mezcla lineal: $\kappa_{\text{prom}} = 0.9\kappa_{\text{aire}} + 0.1\kappa_{\text{agua}}$. Calcule la capacitancia teórica.**
    $$\kappa_{\text{prom}} = 0.9(1.0) + 0.1(80.0) = 0.9 + 8.0 = 8.9$$
    $$C = \kappa_{\text{prom}} C_0 = 8.9 \times 100\text{ pF} = \mathbf{890\text{ pF}}$$

15. **Cable coaxial: $a = 0.5\text{ cm} = 0.005\text{ m}$, $b = 1.5\text{ cm} = 0.015\text{ m}$, $\kappa = 2.3$, $\Delta V = 5,000\text{ V}$. Calcule la carga por unidad de longitud.**
    * Capacitancia por unidad de longitud:
      $$\frac{C}{L} = \frac{2\pi \kappa \epsilon_0}{\ln(b/a)} = \frac{\kappa}{2 k_e \ln(b/a)}$$
      $$\frac{b}{a} = \frac{1.5}{0.5} = 3.0 \implies \ln(3.0) \approx 1.09861$$
      $$\frac{C}{L} = \frac{2.3}{2(8.988 \times 10^9)(1.09861)} \approx 1.1646 \times 10^{-10}\text{ F/m}$$
    * Carga lineal:
      $$\lambda = \frac{Q}{L} = \left( \frac{C}{L} \right) \Delta V = (1.1646 \times 10^{-10}\text{ F/m})(5000\text{ V}) \approx \mathbf{5.82 \times 10^{-7}\text{ C/m}} = \mathbf{0.582\ \mu\text{C/m}} = \mathbf{582\text{ nC/m}}$$

---

### SEMANA 9: Circuitos de Capacitores

#### Análisis y Lógica
1. **Al conectar dos capacitores diferentes en serie, ¿qué magnitud física es idéntica en ambos? ¿Y si se conectan en paralelo?**
   * **En serie**: La **carga eléctrica** es idéntica en ambos ($Q_1 = Q_2 = Q_{\text{total}}$).
   * **En paralelo**: La **diferencia de potencial (voltaje)** es idéntica en ambos ($\Delta V_1 = \Delta V_2 = \Delta V_{\text{fuente}}$).

2. **Si desea almacenar la máxima cantidad de energía combinando tres capacitores diferentes con una sola fuente de voltaje, ¿debería conectarlos en serie o en paralelo? Justifique.**
   * **Respuesta**: Se deben conectar en **paralelo**.
   * **Justificación**: La energía total conectada a una fuente de voltaje constante $\Delta V$ es $U = \frac{1}{2} C_{\text{eq}} (\Delta V)^2$. Para maximizar $U$, se requiere maximizar $C_{\text{eq}}$. En paralelo, $C_{\text{eq}} = C_1 + C_2 + C_3$, lo cual es estrictamente mayor que la suma inversa de la combinación en serie ($\frac{1}{C_{\text{serie}}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}$, donde $C_{\text{serie}} < C_{\text{menor}}$).

3. **Se conectan dos capacitores en serie. ¿La capacitancia equivalente es mayor, menor o igual que la capacitancia del capacitor más pequeño del grupo?**
   * **Respuesta**: Es estrictamente **menor** que la capacitancia del capacitor más pequeño.
   * **Justificación**: Por la relación $\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2}$. Dado que $\frac{1}{C_2} > 0$, se cumple que $\frac{1}{C_{\text{eq}}} > \frac{1}{C_1} \implies C_{\text{eq}} < C_1$, e igualmente $C_{\text{eq}} < C_2$.

4. **Si un capacitor en un circuito en paralelo falla poniéndose en cortocircuito (se comporta como un cable continuo), ¿qué ocurre con el resto de los capacitores en paralelo?**
   * **Respuesta**: La diferencia de potencial en todo el bloque paralelo cae instantáneamente a cero ($\Delta V = 0$). Todos los capacitores en paralelo se descargan por completo ($Q = C \cdot 0 = 0$), y la fuente de alimentación queda en cortocircuito directo a través del componente fallado, generando una sobrecorriente extrema.

5. **Explique el proceso físico de redistribución de carga cuando un capacitor cargado se conecta en paralelo con uno idéntico pero completamente descargado.**
   * **Respuesta**: Al conectarse, la diferencia de potencial inicial del capacitor cargado impulsa electrones hacia la placa negativa del capacitor descargado y succiona electrones de la placa positiva, estableciendo un flujo transitorio de carga hasta que las placas de ambos capacitores alcanzan el mismo potencial eléctrico.
   * Al ser capacitores idénticos ($C_1 = C_2 = C$), la carga total inicial $Q_0$ se divide exactamente por la mitad: cada uno almacena $Q_f = Q_0/2$, y el voltaje de equilibrio final es $V_f = V_0/2$.
   * La energía electrostática final total del sistema es $U_f = 2 \times \frac{1}{2} C (V_0/2)^2 = \frac{1}{2} U_0$. El 50% de la energía original se disipa en forma de calor por efecto Joule en los cables conductores y radiación electromagnética durante el transitorio.

---

#### Desarrollo Matemático
6. **Tres capacitores de $2.0\ \mu\text{F}$, $4.0\ \mu\text{F}$ y $6.0\ \mu\text{F}$ conectados en serie a $24\text{ V}$. Calcule la capacitancia equivalente.**
   $$\frac{1}{C_{\text{eq}}} = \frac{1}{2.0} + \frac{1}{4.0} + \frac{1}{6.0} = \frac{6 + 3 + 2}{12} = \frac{11}{12}\ \mu\text{F}^{-1}$$
   $$C_{\text{eq}} = \frac{12}{11}\ \mu\text{F} \approx \mathbf{1.091\ \mu\text{F}}$$

7. **Mismos capacitores ($2.0\ \mu\text{F}$, $4.0\ \mu\text{F}$ y $6.0\ \mu\text{F}$) conectados en paralelo a $24\text{ V}$. Calcule la capacitancia equivalente.**
   $$C_{\text{eq}} = C_1 + C_2 + C_3 = 2.0\ \mu\text{F} + 4.0\ \mu\text{F} + 6.0\ \mu\text{F} = \mathbf{12.0\ \mu\text{F}}$$

8. **Para el circuito en serie del problema 6, determine la carga y el voltaje en el capacitor de $2.0\ \mu\text{F}$.**
   * Carga del circuito en serie:
     * Usando $C_{\text{eq}} = 1.09\ \mu\text{F}$ (del ejercicio 6): $Q = (1.09\ \mu\text{F})(24\text{ V}) = \mathbf{26.16\ \mu\text{C}}$.
     * (O con fracción exacta $12/11\ \mu\text{F}$): $Q = \frac{288}{11}\ \mu\text{C} \approx \mathbf{26.18\ \mu\text{C}}$.
   * Voltaje en el capacitor de $2.0\ \mu\text{F}$:
     $$V_1 = \frac{26.16\ \mu\text{C}}{2.0\ \mu\text{F}} = \mathbf{13.08\text{ V}} \quad \left(\text{o con fracción exacta } \frac{144}{11}\text{ V} \approx 13.09\text{ V}\right)$$

9. **$C_1 = 4.0\ \mu\text{F}$ cargado a $100\text{ V}$ se desconecta y se conecta en paralelo con $C_2 = 6.0\ \mu\text{F}$ descargado. Calcule el voltaje final de equilibrio.**
   * Carga inicial conservada:
     $$Q_{\text{total}} = C_1 V_1 = (4.0\ \mu\text{F})(100\text{ V}) = 400\ \mu\text{C}$$
   * Capacitancia equivalente en paralelo:
     $$C_{\text{eq}} = C_1 + C_2 = 4.0\ \mu\text{F} + 6.0\ \mu\text{F} = 10.0\ \mu\text{F}$$
   * Voltaje final:
     $$V_f = \frac{Q_{\text{total}}}{C_{\text{eq}}} = \frac{400\ \mu\text{C}}{10.0\ \mu\text{F}} = \mathbf{40.0\text{ V}}$$

10. **Red mixta: capacitor de $3.0\ \mu\text{F}$ en serie con un bloque paralelo de $2.0\ \mu\text{F}$ y $4.0\ \mu\text{F}$. Calcule la capacitancia equivalente total.**
    * Bloque paralelo: $C_p = 2.0\ \mu\text{F} + 4.0\ \mu\text{F} = 6.0\ \mu\text{F}$.
    * Reducción en serie con $C_s = 3.0\ \mu\text{F}$:
      $$C_{\text{eq}} = \frac{C_s \cdot C_p}{C_s + C_p} = \frac{3.0 \times 6.0}{3.0 + 6.0} = \frac{18.0}{9.0} = \mathbf{2.00\ \mu\text{F}}$$

---

#### Aplicación
11. **Flash de cámara requiere $150\ \mu\text{F}$ a $300\text{ V}$. Disponibles solo capacitores de $150\ \mu\text{F}$ / $150\text{ V}$. Diseñe el arreglo mínimo.**
    * Para soportar $300\text{ V}$ con unidades de $150\text{ V}$, se colocan 2 capacitores en serie por rama ($150\text{ V} + 150\text{ V} = 300\text{ V}$).
    * La capacitancia de cada rama en serie de dos de $150\ \mu\text{F}$ es: $C_{\text{rama}} = \frac{150}{2} = 75\ \mu\text{F}$.
    * Para alcanzar la capacitancia total requerida de $150\ \mu\text{F}$, se conectan 2 ramas idénticas en paralelo: $C_{\text{eq}} = 75\ \mu\text{F} + 75\ \mu\text{F} = 150\ \mu\text{F}$.
    * **Arreglo mínimo**: Matriz de **4 capacitores en total** (2 ramas en paralelo de 2 capacitores en serie cada una).

12. **Sintonizador de radio requiere exactamente $7.5\text{ pF}$. Stock disponible: capacitores de $10\text{ pF}$ y $5.0\text{ pF}$. Proponga una combinación exacta.**
    * **Solución óptima (con 3 capacitores de $5.0\text{ pF}$)**:
      1. Se conectan dos capacitores de $5.0\text{ pF}$ en serie:
         $$C_{\text{serie}} = \frac{5.0 \times 5.0}{5.0 + 5.0} = 2.5\text{ pF}$$
      2. Este bloque en serie se conecta en paralelo con un tercer capacitor de $5.0\text{ pF}$:
         $$C_{\text{eq}} = 2.5\text{ pF} + 5.0\text{ pF} = \mathbf{7.5\text{ pF}}$$

13. **UPS de memoria: 5 supercapacitores de $1.2\text{ F}$ en paralelo a $5.0\text{ V}$. Calcule la energía total disponible.**
    * Capacitancia en paralelo: $C_{\text{eq}} = 5 \times 1.2\text{ F} = 6.0\text{ F}$.
    * Energía total almacenada:
      $$U = \frac{1}{2} C_{\text{eq}} (\Delta V)^2 = \frac{1}{2} (6.0\text{ F})(5.0\text{ V})^2 = 3.0 \times 25.0 = \mathbf{75.0\text{ J}}$$

14. **Filtro automotriz: $C_1 = 22\ \mu\text{F}$ y $C_2 = 47\ \mu\text{F}$ en paralelo. Pico transitorio de $\Delta Q = 1.0\text{ mC}$. Calcule el incremento de voltaje.**
    * Capacitancia total del filtro: $C_p = 22\ \mu\text{F} + 47\ \mu\text{F} = 69\ \mu\text{F} = 69 \times 10^{-6}\text{ F}$.
    * Incremento de potencial:
      $$\Delta V = \frac{\Delta Q}{C_p} = \frac{1.0 \times 10^{-3}\text{ C}}{69 \times 10^{-6}\text{ F}} \approx \mathbf{14.49\text{ V}}$$

15. **Módulo aeroespacial: tres capacitores de $10\ \mu\text{F}$ en serie. El capacitor central falla abriendo el circuito. Determine la nueva capacitancia del sistema.**
    * **Respuesta**: $\mathbf{C_{\text{eq}} = 0\text{ F}}$ (Circuito Abierto).
    * **Justificación**: En una configuración en serie, si uno de los componentes se rompe en circuito abierto (resistencia infinita / desconexión física), se interrumpe por completo la trayectoria de conducción y transferencia de carga entre las terminales principales.

---

### SEMANA 10: Resistividad, Resistencia, Corriente y Voltaje

#### Análisis y Lógica
1. **Explique la diferencia fundamental entre los conceptos de resistencia eléctrica y resistividad. ¿Cuál es una propiedad intrínseca del material?**
   * **Resistencia ($R$)**: Es una propiedad macroscópica y extrínseca del objeto o conductor específico; cuantifica su oposición global al flujo de corriente y depende de su geometría (longitud $\ell$ y área transversal $A$) así como del material: $R = \rho \frac{\ell}{A}$.
   * **Resistividad ($\rho$)**: Es una propiedad microscópica e **intrínseca** de la sustancia/material; caracteriza la oposición atómica al movimiento de electrones libres independientemente del tamaño o forma del conductor. Depende únicamente de la composición química y la temperatura.
   * **Propiedad intrínseca**: La **resistividad ($\rho$)**.

2. **Si un cable cilíndrico de cobre se estira uniformemente hasta duplicar su longitud original manteniendo su volumen constante, ¿cómo cambia su resistencia eléctrica?**
   * **Respuesta**: Su resistencia eléctrica se **cuadruplica ($R_f = 4 R_0$)**.
   * **Justificación**:
     * Volumen inicial: $V = A_0 \ell_0$.
     * Volumen final: $V = A_f \ell_f = A_f (2 \ell_0) \implies A_f = \frac{A_0}{2}$ (el área transversal se reduce a la mitad).
     * Nueva resistencia:
       $$R_f = \rho \frac{\ell_f}{A_f} = \rho \frac{2\ell_0}{A_0/2} = 4 \left(\rho \frac{\ell_0}{A_0}\right) = 4 R_0$$

3. **¿Cómo afecta el incremento de temperatura a la resistencia eléctrica de un conductor metálico típico en comparación con un semiconductor? Explique brevemente la razón física.**
   * **Conductor metálico típico**: Su resistencia **aumenta** al subir la temperatura ($\alpha > 0$).
     * *Razón*: La densidad de portadores libres $n$ es prácticamente constante; el calor aumenta la amplitud de vibración térmica de los iones en la red cristalina, incrementando la frecuencia de choques de los electrones y reduciendo su tiempo medio de colisión $\tau$.
   * **Semiconductor (ej. Silicio, Germanio)**: Su resistencia **disminuye** drásticamente al subir la temperatura ($\alpha < 0$).
     * *Razón*: El aporte térmico rompe enlaces covalentes y promueve electrones desde la banda de valencia a la de conducción, incrementando de manera exponencial la densidad de portadores libres $n$, superando con creces el efecto de las colisiones.

4. **Defina la densidad de corriente ($J$) y explique su relación con la velocidad de deriva de los electrones portadores de carga.**
   * **Definición**: La densidad de corriente $\vec{J}$ es la corriente eléctrica por unidad de área transversal perpendicular al flujo de cargas:
     $$J = \frac{I}{A} \quad [\text{A/m}^2]$$
   * **Relación microscópica**:
     $$\vec{J} = n q \vec{v}_d$$
     Donde $n$ es la densidad de portadores de carga, $q$ es la carga de cada portador, y $\vec{v}_d$ es la velocidad media de arrastre o deriva. Para electrones ($q = -e$), $\vec{J} = -n e \vec{v}_d$, lo que demuestra que la densidad de corriente tiene dirección opuesta al movimiento de los electrones.

5. **De acuerdo con la Ley de Ohm, si el voltaje aplicado a un elemento se duplica, la corriente se duplica. ¿Es esto válido para todos los componentes electrónicos? Dé un contraejemplo.**
   * **Respuesta**: **No**, no es válido para todos los componentes. La Ley de Ohm es una relación empírica que sólo cumplen los materiales y elementos óhmicos (donde $R = \text{constante}$).
   * **Contraejemplo**: Un **diodo semiconductor** (de unión p-n). En un diodo polarizado en directo, la corriente responde a la ecuación exponencial de Shockley ($I = I_s (e^{eV/kT} - 1)$); un pequeño incremento en el voltaje o duplicarlo multiplica la corriente por cientos o miles de veces.

---

#### Desarrollo Matemático
6. **Alambre de cobre ($\rho = 1.7 \times 10^{-8}\ \Omega\cdot\text{m}$) con longitud $\ell = 20\text{ m}$ y diámetro $D = 2.0\text{ mm}$. Calcule su resistencia.**
   * Radio: $r = 1.0\text{ mm} = 1.0 \times 10^{-3}\text{ m}$.
   * Área transversal: $A = \pi r^2 = \pi (1.0 \times 10^{-3}\text{ m})^2 = \pi \times 10^{-6}\text{ m}^2 \approx 3.1416 \times 10^{-6}\text{ m}^2$.
   * Resistencia:
     $$R = \rho \frac{\ell}{A} = \frac{(1.7 \times 10^{-8}\ \Omega\cdot\text{m})(20\text{ m})}{\pi \times 10^{-6}\text{ m}^2} = \frac{3.4 \times 10^{-7}}{\pi \times 10^{-6}} = \frac{0.34}{\pi} \approx \mathbf{0.108\ \Omega} = \mathbf{108\text{ m}\Omega}$$

7. **Corriente $I(t) = 2t^2 + 5\text{ (A)}$. Calcule la carga total que pasa entre $t = 0\text{ s}$ y $t = 3\text{ s}$.**
   $$Q = \int_{0}^{3} I(t) dt = \int_{0}^{3} (2t^2 + 5) dt = \left[ \frac{2}{3} t^3 + 5t \right]_{0}^{3} = \frac{2}{3}(3)^3 + 5(3) - 0 = \frac{2}{3}(27) + 15 = 18 + 15 = \mathbf{33.0\text{ C}}$$

8. **Barra de aluminio con $R_0 = 50\ \Omega$ a $20^\circ\text{C}$. Coeficiente $\alpha = 3.9 \times 10^{-3}\ ^\circ\text{C}^{-1}$. Calcule su resistencia a $120^\circ\text{C}$.**
   * $\Delta T = 120^\circ\text{C} - 20^\circ\text{C} = 100^\circ\text{C}$.
   $$R(T) = R_0 [1 + \alpha \Delta T] = 50 [1 + (3.9 \times 10^{-3})(100)] = 50 [1 + 0.39] = 50 \times 1.39 = \mathbf{69.5\ \Omega}$$

9. **Alambre cilíndrico transporta $I = 8.0\text{ A}$, radio $r = 1.5\text{ mm} = 1.5 \times 10^{-3}\text{ m}$. Calcule el módulo de la densidad de corriente $J$.**
   * Área: $A = \pi r^2 = \pi (1.5 \times 10^{-3})^2 = 2.25\pi \times 10^{-6}\text{ m}^2 \approx 7.0686 \times 10^{-6}\text{ m}^2$.
   $$J = \frac{I}{A} = \frac{8.0\text{ A}}{7.0686 \times 10^{-6}\text{ m}^2} \approx \mathbf{1.13 \times 10^6\text{ A/m}^2} = \mathbf{1.13\text{ MA/m}^2}$$

10. **Calentador eléctrico conectado a $120\text{ V}$ consume $12\text{ A}$. Calcule la potencia disipada y la resistencia.**
    * Potencia:
      $$P = V \cdot I = (120\text{ V})(12\text{ A}) = \mathbf{1440\text{ W}} = \mathbf{1.44\text{ kW}}$$
    * Resistencia:
      $$R = \frac{V}{I} = \frac{120\text{ V}}{12\text{ A}} = \mathbf{10.0\ \Omega}$$

---

#### Aplicación
11. **Instalación residencial: cable calibre 12 ($A = 3.31\text{ mm}^2 = 3.31 \times 10^{-6}\text{ m}^2$), corriente $I = 20\text{ A}$, línea de $\ell = 50\text{ m}$ (ida y vuelta total), $\rho_{\text{Cu}} = 1.7 \times 10^{-8}\ \Omega\cdot\text{m}$. Caída de voltaje.**
    * Resistencia del conductor:
      $$R = \rho \frac{\ell}{A} = \frac{(1.7 \times 10^{-8}\ \Omega\cdot\text{m})(50\text{ m})}{3.31 \times 10^{-6}\text{ m}^2} \approx 0.2568\ \Omega$$
    * Caída de voltaje:
      $$\Delta V = I \cdot R = (20\text{ A})(0.2568\ \Omega) \approx \mathbf{5.14\text{ V}}$$

12. **Línea aérea de aluminio ($\rho = 2.8 \times 10^{-8}\ \Omega\cdot\text{m}$) de longitud $\ell = 5.0\text{ km} = 5000\text{ m}$. Resistencia máxima permitida $R = 0.4\ \Omega$. Calcule el diámetro mínimo.**
    * Área mínima:
      $$R = \rho \frac{\ell}{A} \implies A_{\text{mín}} = \frac{\rho \ell}{R} = \frac{(2.8 \times 10^{-8}\ \Omega\cdot\text{m})(5000\text{ m})}{0.4\ \Omega} = 3.50 \times 10^{-4}\text{ m}^2$$
    * Diámetro:
      $$A = \frac{\pi D^2}{4} \implies D = \sqrt{\frac{4 A}{\pi}} = \sqrt{\frac{4(3.50 \times 10^{-4})}{\pi}} = \sqrt{4.456 \times 10^{-4}} \approx \mathbf{0.0211\text{ m}} = \mathbf{21.1\text{ mm}} = \mathbf{2.11\text{ cm}}$$

13. **Filamento de wolframio: $R_0 = 15\ \Omega$ a $20^\circ\text{C}$. Encendido a $120\text{ V}$ consume $60\text{ W}$. $\alpha = 4.5 \times 10^{-3}\ ^\circ\text{C}^{-1}$. Calcule la temperatura de operación.**
    * Resistencia caliente:
      $$R_{\text{caliente}} = \frac{V^2}{P} = \frac{(120)^2}{60} = \frac{14,400}{60} = 240\ \Omega$$
    * Relación con temperatura:
      $$R_{\text{caliente}} = R_0 [1 + \alpha (T - T_0)] \implies \frac{240}{15} = 16 = 1 + (4.5 \times 10^{-3})(T - 20)$$
      $$15 = (4.5 \times 10^{-3})(T_f - 20) \implies T_f - 20 = \frac{15}{0.0045} = 3333.33^\circ\text{C}$$
      $$T_f = 3333.33 + 20 = \mathbf{3353.33^\circ\text{C}}$$

14. **Muestra biológica cilíndrica de longitud $\ell = 1.5\text{ cm} = 0.015\text{ m}$ y radio $r = 4.0\text{ mm} = 0.004\text{ m}$. Resistencia medida $R = 120\ \Omega$. Determine la resistividad $\rho$.**
    * Área: $A = \pi r^2 = \pi (0.004)^2 = 1.6\pi \times 10^{-5}\text{ m}^2 \approx 5.0265 \times 10^{-5}\text{ m}^2$.
    * Resistividad:
      $$\rho = \frac{R A}{\ell} = \frac{(120\ \Omega)(5.0265 \times 10^{-5}\text{ m}^2)}{0.015\text{ m}} = \mathbf{0.402\ \Omega\cdot\text{m}}$$

15. **Auto eléctrico: $I = 150\text{ A}$ a $V = 400\text{ V}$ durante $t = 2.0\text{ minutos}$. Calcule la energía total consumida en kWh.**
    * Potencia: $P = V \cdot I = (400\text{ V})(150\text{ A}) = 60,000\text{ W} = 60\text{ kW}$.
    * Tiempo en horas: $t = 2.0\text{ min} = \frac{2}{60}\text{ h} = \frac{1}{30}\text{ h}$.
    * Energía en kWh:
      $$E = P \cdot t = 60\text{ kW} \times \left( \frac{1}{30}\text{ h} \right) = \mathbf{2.00\text{ kWh}}$$
      *(En Joules: $E = 60,000\text{ W} \times 120\text{ s} = 7.20 \times 10^6\text{ J} = 7.20\text{ MJ}$)*

---

### SEMANA 11: Resistores en Serie y Paralelo

#### Análisis y Lógica
1. **Al conectar varios resistores de distintos valores en paralelo a una fuente de voltaje, ¿cuál de ellos disipará la mayor cantidad de potencia: el de mayor o el de menor resistencia? Justifique.**
   * **Respuesta**: El de **menor resistencia** disipará la mayor cantidad de potencia.
   * **Justificación**: En una conexión en paralelo, todos los resistores comparten el mismo voltaje $V$. La potencia disipada se expresa como $P = \frac{V^2}{R}$. Al ser $V$ constante, la potencia es inversamente proporcional a la resistencia ($P \propto \frac{1}{R}$). Por tanto, el resistor de menor valor óhmico absorbe y disipa mayor corriente y mayor potencia.

2. **Si un resistor en una red en serie se quema y se abre por completo, ¿qué ocurre con la corriente en los demás resistores del circuito?**
   * **Respuesta**: La corriente en todos los demás resistores cae inmediatamente a **cero ($I = 0$)**.
   * **Justificación**: Un circuito en serie posee una única trayectoria cerrada de circulación para la corriente. Si un elemento se abre (resistencia infinita), se interrumpe la continuidad eléctrica y cesa la corriente en todo el lazo.

3. **Explique conceptualmente por qué la resistencia equivalente de un arreglo de resistores en paralelo siempre es menor que el valor del resistor más pequeño del grupo.**
   * **Respuesta**: Porque cada resistor en paralelo agrega un nuevo camino conductor independiente y simultáneo para el paso de cargas. Esto equivale a aumentar el área transversal efectiva global disponible para el flujo de corriente (análogo a abrir carriles adicionales en una autopista o conectar más tuberías en paralelo). Como la fuente tiene más caminos disponibles para mover carga, la oposición total al paso de la corriente se reduce por debajo de la oposición que presentaría la rama individual más fácil (la de menor resistencia).

4. **¿Qué es un divisor de voltaje y bajo qué tipo de conexión de resistores se fundamenta su principio de operación?**
   * **Respuesta**: Un divisor de voltaje es un circuito lineal diseñado para obtener una tensión de salida que es una fracción determinada y proporcional del voltaje de entrada total.
   * **Principio**: Se fundamenta en una conexión en **SERIE**. Al circular la misma corriente por todos los resistores, la caída de tensión en cada resistor es proporcional a su propia resistencia: $V_k = V_{\text{total}} \left( \frac{R_k}{R_{\text{eq}}} \right)$.

5. **Dispone de tres focos idénticos diseñados para operar a 110 V. Si los conecta en serie a una línea de 110 V, ¿iluminarán con la misma intensidad que si se conectaran en paralelo a la misma línea? Explique basándose en la potencia disipada.**
   * **Respuesta**: **No, iluminarán con una intensidad muchísimo menor (1/9 de la intensidad individual en paralelo).**
   * **Explicación**: Sea $R$ la resistencia de cada foco.
     * *En paralelo a 110 V*: Cada foco recibe la tensión nominal completa de $110\text{ V}$. Potencia de cada foco:
       $$P_{\text{paralelo}} = \frac{V^2}{R} = \frac{110^2}{R}$$
     * *En serie a 110 V*: El voltaje se divide en tres partes iguales: cada foco recibe sólo $\frac{110}{3}\text{ V} \approx 36.7\text{ V}$. Potencia de cada foco:
       $$P_{\text{serie}} = \frac{(V/3)^2}{R} = \frac{V^2}{9R} = \frac{1}{9} P_{\text{paralelo}}$$
     * Al recibir cada foco sólo el $\approx 11.1\%$ de su potencia nominal, su emisión luminosa es sumamente tenue en comparación con la conexión en paralelo.

---

#### Desarrollo Matemático
6. **Tres resistores de $10\ \Omega$, $20\ \Omega$ y $30\ \Omega$ en serie a una fuente de $12\text{ V}$. Calcule la resistencia equivalente y la corriente total.**
   $$R_{\text{eq}} = R_1 + R_2 + R_3 = 10 + 20 + 30 = \mathbf{60.0\ \Omega}$$
   $$I_{\text{total}} = \frac{V}{R_{\text{eq}}} = \frac{12.0\text{ V}}{60.0\ \Omega} = \mathbf{0.20\text{ A}} = \mathbf{200\text{ mA}}$$

7. **Mismos resistores ($10\ \Omega$, $20\ \Omega$ y $30\ \Omega$) en paralelo a la fuente de $12\text{ V}$. Calcule la resistencia equivalente y la corriente total.**
   $$\frac{1}{R_{\text{eq}}} = \frac{1}{10} + \frac{1}{20} + \frac{1}{30} = \frac{6 + 3 + 2}{60} = \frac{11}{60}\ \Omega^{-1}$$
   $$R_{\text{eq}} = \frac{60}{11}\ \Omega \approx \mathbf{5.45\ \Omega}$$
   $$I_{\text{total}} = \frac{V}{R_{\text{eq}}} = \frac{12.0\text{ V}}{60/11\ \Omega} = \frac{132}{60} = \mathbf{2.20\text{ A}}$$
   *(Por ramas: $I_{10} = 1.2\text{ A}, I_{20} = 0.6\text{ A}, I_{30} = 0.4\text{ A}$; suma = $2.20\text{ A}$)*

8. **Para el circuito en serie del problema 6 ($I = 0.20\text{ A}$), calcule la caída de voltaje y la potencia en el resistor de $20\ \Omega$.**
   * Caída de voltaje:
     $$V_{20} = I \cdot R_2 = (0.20\text{ A})(20\ \Omega) = \mathbf{4.00\text{ V}}$$
   * Potencia disipada:
     $$P_{20} = I^2 R_2 = (0.20\text{ A})^2(20\ \Omega) = (0.04)(20) = \mathbf{0.80\text{ W}} = \mathbf{800\text{ mW}}$$
     *(O bien: $P_{20} = V_{20} \cdot I = 4.0\text{ V} \times 0.20\text{ A} = 0.80\text{ W}$)*

9. **Circuito paralelo de dos ramas ($R_1 = 15\ \Omega$, $R_2$ desconocida). $I_{\text{total}} = 5.0\text{ A}$ e $I_1 = 2.0\text{ A}$. Determine $R_2$.**
   * Corriente en la rama 2 (por Ley de Nodos):
     $$I_2 = I_{\text{total}} - I_1 = 5.0\text{ A} - 2.0\text{ A} = 3.0\text{ A}$$
   * Voltaje común en las ramas paralelas:
     $$V = I_1 R_1 = (2.0\text{ A})(15\ \Omega) = 30.0\text{ V}$$
   * Valor de $R_2$:
     $$R_2 = \frac{V}{I_2} = \frac{30.0\text{ V}}{3.0\text{ A}} = \mathbf{10.0\ \Omega}$$

10. **Red mixta: resistor de $5.0\ \Omega$ en serie con una combinación paralelo de $12\ \Omega$ y $4.0\ \Omega$. Calcule la resistencia equivalente total.**
    * Resistencia del bloque en paralelo:
      $$R_p = \frac{12 \times 4.0}{12 + 4.0} = \frac{48}{16} = 3.0\ \Omega$$
    * Resistencia total con el resistor en serie:
      $$R_{\text{eq}} = 5.0\ \Omega + R_p = 5.0 + 3.0 = \mathbf{8.00\ \Omega}$$

---

#### Aplicación
11. **Cadena navideña de 50 bombillas idénticas en serie a $120\text{ V}$, consume $25\text{ W}$ en total. Determine la resistencia de cada bombilla.**
    * Resistencia equivalente total de la cadena:
      $$P_{\text{total}} = \frac{V^2}{R_{\text{eq}}} \implies R_{\text{eq}} = \frac{(120)^2}{25} = \frac{14,400}{25} = 576\ \Omega$$
    * Al ser 50 componentes en serie:
      $$R_{\text{eq}} = 50 \cdot R_{\text{bombilla}} \implies R_{\text{bombilla}} = \frac{576\ \Omega}{50} = \mathbf{11.52\ \Omega}$$

12. **Ingeniero de audio necesita acoplar $8.0\ \Omega$. Solo dispone de resistores de $16\ \Omega$. Diseñe la red con menor cantidad de componentes.**
    * **Diseño**: Conectar **dos resistores de $16\ \Omega$ en paralelo**.
    * **Cálculo**:
      $$R_{\text{eq}} = \frac{16 \times 16}{16 + 16} = \frac{256}{32} = \mathbf{8.0\ \Omega}$$
    * **Componentes mínimos**: Exactamente **2 resistores de $16\ \Omega$**.

13. **Divisor de voltaje: entrada $V_{\text{in}} = 9.0\text{ V}$, salida requerida $V_{\text{out}} = 3.0\text{ V}$ sobre un resistor de carga $R_{\text{out}} = 1,000\ \Omega$. Determine el otro resistor $R_1$.**
    * Fórmula del divisor de tensión:
      $$V_{\text{out}} = V_{\text{in}} \left( \frac{R_{\text{out}}}{R_1 + R_{\text{out}}} \right)$$
      $$3.0\text{ V} = 9.0\text{ V} \left( \frac{1000}{R_1 + 1000} \right) \implies \frac{3.0}{9.0} = \frac{1}{3} = \frac{1000}{R_1 + 1000}$$
      $$R_1 + 1000 = 3000 \implies R_1 = \mathbf{2,000\ \Omega} = \mathbf{2.0\text{ k}\Omega}$$

14. **Suelo radiante: 4 paneles idénticos de $48\ \Omega$ en paralelo a $240\text{ V}$. Calcule la corriente total y verifique disyuntor de $25\text{ A}$.**
    * Corriente por cada panel:
      $$I_{\text{panel}} = \frac{240\text{ V}}{48\ \Omega} = 5.0\text{ A}$$
    * Corriente total (4 paneles en paralelo):
      $$I_{\text{total}} = 4 \times 5.0\text{ A} = \mathbf{20.0\text{ A}}$$
      *(O bien: $R_{\text{eq}} = 48/4 = 12\ \Omega \implies I_{\text{total}} = 240/12 = 20.0\text{ A}$)*
    * **Verificación de protección**:
      * Como la corriente nominal es de $20.0\text{ A}$ y el disyuntor es de $25.0\text{ A}$ ($20.0\text{ A} < 25.0\text{ A}$), el disyuntor **SÍ soportará la carga sin dispararse**.
      * *Nota técnica*: Opera al $80\%$ de su capacidad nominal ($20/25 = 0.80$), cumpliendo con la regla de seguridad estándar del Código Eléctrico para circuitos de carga continua.

15. **Instrumento de medición con red paralelo de tres derivaciones: $1.0\ \Omega$, $2.0\ \Omega$ y $0.5\ \Omega$. Se desconecta accidentalmente la resistencia de $0.5\ \Omega$. Corriente constante $I = 3.5\text{ A}$. Determine el cambio porcentual en la resistencia equivalente.**
    * **Resistencia equivalente inicial ($R_{\text{eq1}}$)** con las 3 ramas:
      $$\frac{1}{R_{\text{eq1}}} = \frac{1}{1.0} + \frac{1}{2.0} + \frac{1}{0.5} = 1.0 + 0.5 + 2.0 = 3.5 = \frac{7}{2}\ \Omega^{-1}$$
      $$R_{\text{eq1}} = \frac{2}{7}\ \Omega \approx 0.2857\ \Omega$$
    * **Resistencia equivalente final ($R_{\text{eq2}}$)** sin la rama de $0.5\ \Omega$:
      $$\frac{1}{R_{\text{eq2}}} = \frac{1}{1.0} + \frac{1}{2.0} = 1.5 = \frac{3}{2}\ \Omega^{-1}$$
      $$R_{\text{eq2}} = \frac{2}{3}\ \Omega \approx 0.6667\ \Omega$$
    * **Cambio porcentual**:
      $$\% \Delta R = \left( \frac{R_{\text{eq2}} - R_{\text{eq1}}}{R_{\text{eq1}}} \right) \times 100\% = \left( \frac{\frac{2}{3} - \frac{2}{7}}{\frac{2}{7}} \right) \times 100\%$$
      $$\frac{2}{3} - \frac{2}{7} = \frac{14 - 6}{21} = \frac{8}{21}$$
    * **Conclusión**: **+133.33% de incremento en la resistencia equivalente** (pasa de $0.2857\ \Omega$ a $0.6667\ \Omega$).

---
*Fin del Solucionario Oficial.*

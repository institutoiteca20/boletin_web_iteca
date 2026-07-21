$('[name="dob"]').formatter({
	pattern: '{{99}}-{{99}}-{{9999}}'
});

function enviar() {
	var ci = $('[name="ci"]').val().trim();
	var dob = $('[name="dob"]').val().trim();

	if (ci === "13341776" && dob === "19-03-2006") {
		$('#modal_bienvenida').modal('show');

		$('#modal_bienvenida').on('hidden.bs.modal', function () {
			$('#modal_large').modal('show');

			$('#boletin').html(`
<p><strong>Nombre completo:</strong> YUJRA GUEVARA NESTOR FERNANDO</p>
<p><strong>Carrera:</strong> CONTADURÍA GENERAL</p>
<div style="overflow-x: auto;">
<table class="table table-bordered" style="min-width: 900px;">
	<thead style="background:#FF6600; color:#fff;">
		<tr>
			<th>Sigla</th>
			<th>Materia</th>
			<th>Curso</th>
			<th>Paralelo</th>
			<th>1B</th>
			<th>2B</th>
			<th>3B</th>
			<th>4B</th>
			<th>NF</th>
			<th>SI</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>SIT-207</td><td>SISTEMA TRIBUTARIO                  </td><td>2</td><td>2D</td><td>68</td><td>61</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
		<tr><td>COC-202</td><td>CONTABILIDAD DE COSTOS I            </td><td>2</td><td>2D</td><td>72</td><td>63</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
		<tr><td>EMP-206</td><td>EMPRENDIMIENTO PRODUCTIVO           </td><td>2</td><td>2D</td><td>80</td><td>67</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
		<tr><td>COS-203</td><td>CONTABILIDAD DE SOCIEDADES          </td><td>2</td><td>2D</td><td>70</td><td>61</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
		<tr><td>CDS-204</td><td>CONTABILIDAD DE SEGUROS             </td><td>2</td><td>2D</td><td>67</td><td>60</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
		<tr><td>CON-201</td><td>CONTABILIDAD II                     </td><td>2</td><td>2D</td><td>75</td><td>61</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
		<tr><td>CBC-205</td><td>CONTABILIDAD BANCARIA Y COOPERATIVAS</td><td>2</td><td>2D</td><td>69</td><td>59</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
	</tbody>
</table>
</div>
			`);

			// Calcular promedio NF (1B + 2B + 3B + 4B) / 4
			$('#boletin table tbody tr').each(function () {
				let $tds = $(this).find('td');
				let sum = 0;

				for (let i = 4; i <= 7; i++) {
					let val = parseInt($tds.eq(i).text());
					sum += isNaN(val) ? 0 : val;
				}

				let nf = Math.round(sum / 4);
				$tds.eq(8).text(nf);
			});
		});

		$('#error').hide();
	} else {
		$('#error').show().html('<div class="alert alert-danger text-center">CI o contraseña incorrecta.</div>');
	}
}

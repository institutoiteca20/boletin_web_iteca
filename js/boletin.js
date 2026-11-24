$('[name="dob"]').formatter({
	pattern: '{{99}}-{{99}}-{{9999}}'
});

function enviar() {
	var ci = $('[name="ci"]').val().trim();
	var dob = $('[name="dob"]').val().trim();

	if (ci === "13341776" && dob === "19-03-2006") {
		$('#error').hide();

		$('#boletin').html(`
<div class="bol-info">
	<div class="bol-row"><span class="bol-label">Nombre completo:</span><span class="bol-value">YUJRA GUEVARA NESTOR FERNANDO</span></div>
	<div class="bol-row"><span class="bol-label">Carrera:</span><span class="bol-value">CONTADURÍA GENERAL</span></div>
</div>
<div class="bol-table-wrap">
<table class="bol-table">
	<thead>
		<tr>
			<th class="col-sigla">Sigla</th>
			<th class="col-materia">Materia</th>
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
		<tr><td class="col-sigla">SIT-207</td><td class="col-materia">SISTEMA TRIBUTARIO</td><td>2</td><td>2D</td><td>68</td><td>61</td><td>61</td><td>63</td><td>0</td><td>0</td></tr>
		<tr><td class="col-sigla">COC-202</td><td class="col-materia">CONTABILIDAD DE COSTOS I</td><td>2</td><td>2D</td><td>72</td><td>63</td><td>60</td><td>51</td><td>0</td><td>0</td></tr>
		<tr><td class="col-sigla">EMP-206</td><td class="col-materia">EMPRENDIMIENTO PRODUCTIVO</td><td>2</td><td>2D</td><td>80</td><td>67</td><td>59</td><td>74</td><td>0</td><td>0</td></tr>
		<tr><td class="col-sigla">COS-203</td><td class="col-materia">CONTABILIDAD DE SOCIEDADES</td><td>2</td><td>2D</td><td>70</td><td>61</td><td>58</td><td>64</td><td>0</td><td>0</td></tr>
		<tr><td class="col-sigla">CDS-204</td><td class="col-materia">CONTABILIDAD DE SEGUROS</td><td>2</td><td>2D</td><td>67</td><td>60</td><td>60</td><td>57</td><td>0</td><td>0</td></tr>
		<tr><td class="col-sigla">CON-201</td><td class="col-materia">CONTABILIDAD II</td><td>2</td><td>2D</td><td>75</td><td>61</td><td>62</td><td>55</td><td>0</td><td>0</td></tr>
		<tr><td class="col-sigla">CBC-205</td><td class="col-materia">CONTABILIDAD BANCARIA Y COOPERATIVAS</td><td>2</td><td>2D</td><td>69</td><td>59</td><td>60</td><td>62</td><td>0</td><td>0</td></tr>
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

		$('#modal_large').modal('show');
	} else {
		$('#error').show().html('<div class="alert alert-danger text-center">CI o contraseña incorrecta.</div>');
	}
}
